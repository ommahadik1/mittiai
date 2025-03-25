import React, { useState } from "react";

const SoilHealthDetection = () => {
  const [formData, setFormData] = useState({
    farmerId: "IND-FMR-12345",
    location: "Village: Rampur, District: Varanasi, Uttar Pradesh, India",
    soilType: "Loamy",
    pH: 6.2,
    nitrogen: 180,
    phosphorus: 12,
    potassium: 250,
    organicCarbon: 0.8,
    moistureContent: 22,
    conductivity: 0.4,
  });

  const [aiRecommendation, setAiRecommendation] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const generateAIRecommendation = () => {
    // Replace with your actual AI logic or API call
    const recommendations = {
      lowNitrogen:
        formData.nitrogen < 200
          ? "Nitrogen levels are slightly low. Apply nitrogen-rich fertilizers or add organic matter like compost. Aim for 200+ ppm."
          : "",
      lowPhosphorus:
        formData.phosphorus < 15
          ? "Phosphorus levels are low. Consider phosphate fertilizers or bone meal supplements. Aim for 15+ ppm."
          : "",
      lowOrganicCarbon:
        formData.organicCarbon < 1.0
          ? "Organic carbon is low. Improve soil organic matter by adding compost, manure, or cover crops. Aim for 1.0% or higher."
          : "",
      pHModerate:
        formData.pH < 6.0 || formData.pH > 7.0
          ? "pH is moderately acidic. Consider adding lime if pH drops further below 6.0"
          : "",
    };

    const finalRecommendation = Object.values(recommendations)
      .filter((rec) => rec !== "")
      .join("\n\n");

    setAiRecommendation(
      finalRecommendation ||
        "Your soil health looks generally good. Maintain current practices, but continue monitoring nitrogen, phosphorus, and organic carbon levels."
    );
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
            <div className="col-span-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Soil Test Report
              </label>
            </div>
            {/* Soil Parameters Inputs */}
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
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition duration-300"
            >
              Generate AI Recommendation
            </button>
          </div>
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
