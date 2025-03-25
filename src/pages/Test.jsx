import React, { useState } from "react";
import axios from "axios";

const SoilHealthDetection = () => {
  const [formData, setFormData] = useState({
    farmerId: "",
    location: "",
    soilType: "",
    pH: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    organicCarbon: "",
    moistureContent: "",
    conductivity: "",
  });

  const [aiRecommendation, setAiRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generateAIRecommendation = async () => {
    setLoading(true);
    setError(null);
    setAiRecommendation(null);

    const prompt = `
      Analyze the following soil test report and provide detailed recommendations for improving soil health:
      - Soil Type: ${formData.soilType || "Not specified"}
      - pH: ${formData.pH || "Not specified"}
      - Nitrogen (ppm): ${formData.nitrogen || "Not specified"}
      - Phosphorus (ppm): ${formData.phosphorus || "Not specified"}
      - Potassium (ppm): ${formData.potassium || "Not specified"}
      - Organic Carbon (%): ${formData.organicCarbon || "Not specified"}
      - Moisture Content (%): ${formData.moistureContent || "Not specified"}
      - Electrical Conductivity (dS/m): ${
        formData.conductivity || "Not specified"
      }
      - Location: ${formData.location || "Not specified"}
      - Farmer ID: ${formData.farmerId || "Not specified"}

      Provide actionable advice to improve soil health based on these parameters.
    `;

    console.log("Sending prompt to DeepSeek:", prompt); // Debug: Log the prompt

    try {
      const response = await axios.post(
        "https://api.deepseek.com/v1/chat/completions", // DeepSeek API endpoint
        {
          model: "deepseek-chat", // DeepSeek's chat model
          messages: [
            {
              role: "system",
              content: "You are an expert in soil science and agriculture.",
            },
            { role: "user", content: prompt },
          ],
          max_tokens: 500,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer sk-e71e64946ebd487a8f06ef0ee8f8bc7c", // Your DeepSeek API key
          },
        }
      );

      console.log("API Response:", response.data); // Debug: Log the full response
      const recommendation = response.data.choices[0].message.content.trim();
      setAiRecommendation(
        recommendation || "No specific recommendations provided."
      );
    } catch (err) {
      console.error(
        "Error details:",
        err.response ? err.response.data : err.message
      ); // Detailed error logging
      setError(
        `Failed to generate recommendation: ${
          err.response?.data?.error?.message || err.message
        }. Please check your inputs or try again later.`
      );
    } finally {
      setLoading(false);
    }
  };

  const soilTypes = [
    "Clay",
    "Sandy",
    "Loamy",
    "Silt",
    "Peaty",
    "Chalky",
    "Saline",
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Soil Health Detection
        </h1>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Farmer ID
              </label>
              <input
                type="text"
                name="farmerId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Farmer ID"
                value={formData.farmerId}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Farm Location
              </label>
              <input
                type="text"
                name="location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Farm Location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Soil Type
              </label>
              <select
                name="soilType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.soilType}
                onChange={handleInputChange}
              >
                <option value="">Select Soil Type</option>
                {soilTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {[
              { name: "pH", label: "Soil pH", placeholder: "Enter pH Value" },
              {
                name: "nitrogen",
                label: "Nitrogen (ppm)",
                placeholder: "Enter Nitrogen Level",
              },
              {
                name: "phosphorus",
                label: "Phosphorus (ppm)",
                placeholder: "Enter Phosphorus Level",
              },
              {
                name: "potassium",
                label: "Potassium (ppm)",
                placeholder: "Enter Potassium Level",
              },
              {
                name: "organicCarbon",
                label: "Organic Carbon (%)",
                placeholder: "Enter Organic Carbon %",
              },
              {
                name: "moistureContent",
                label: "Moisture Content (%)",
                placeholder: "Enter Moisture Content",
              },
              {
                name: "conductivity",
                label: "Electrical Conductivity (dS/m)",
                placeholder: "Enter Conductivity",
              },
            ].map(({ name, label, placeholder }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                </label>
                <input
                  type="number"
                  name={name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={generateAIRecommendation}
              disabled={loading}
              className={`bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Generating..." : "Generate AI Recommendation"}
            </button>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {aiRecommendation && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
              <h3 className="font-bold mb-2 text-blue-800">
                AI Soil Health Recommendations
              </h3>
              <p className="text-blue-700 whitespace-pre-line">
                {aiRecommendation}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SoilHealthDetection;
