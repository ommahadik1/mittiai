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
  const [expandedCategory, setExpandedCategory] = useState(null);

  const recommendations = {
    "Plant-Based Recommendations": [
      "Tomato: Grows well in slightly acidic soil (pH 6.0-6.8) and requires moderate nitrogen. The potassium level is sufficient for fruit development.",
      "Wheat: Suitable for loamy soil with a pH close to neutral. The nitrogen level is adequate, but phosphorus can be improved.",
      "Carrot: Prefers loose, loamy soil with a pH between 5.8-6.5. Potassium levels are good for root development.",
      "Chili Pepper: Thrives in well-drained loamy soil with a pH of 6.0-6.5 and benefits from moderate nitrogen and potassium.",
      "Mustard: Grows well in loamy soil with moderate nitrogen needs, but phosphorus supplementation might be needed.",
    ],
    "Fertilizer-Based Recommendations": [
      "Phosphorus Fertilizer: Apply Single Super Phosphate (SSP) or Di-Ammonium Phosphate (DAP) to increase phosphorus levels, which are slightly low.",
      "Organic Carbon Booster: Use compost, farmyard manure (FYM), or vermicompost to enhance organic matter.",
      "Balanced NPK Fertilizer: Use NPK 10-26-26 or NPK 12-32-16 to balance nutrients, especially phosphorus and potassium.",
    ],
    "Additional Soil Health Recommendations": [
      "Nitrogen Levels: Slightly low. Apply nitrogen-rich fertilizers or add organic matter like compost. Aim for 200+ ppm.",
      "Phosphorus Levels: Low. Consider phosphate fertilizers or bone meal supplements. Aim for 15+ ppm.",
      "Organic Carbon: Low. Improve soil organic matter by adding compost, manure, or cover crops. Aim for 1.0% or higher.",
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleCategory = (category) => {
    setExpandedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const generateAIRecommendation = () => {
    setAiRecommendation(Object.keys(recommendations).join("\n"));
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
    <div className="container mx-auto px-4 py-10 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-xl border border-gray-200">
        <h1 className="text-4xl font-extrabold mb-8 text-center ">
          Soil Health Detection
        </h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Farmer ID
              </label>
              <input
                type="text"
                name="farmerId"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                placeholder="Enter Farmer ID"
                value={formData.farmerId}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Farm Location
              </label>
              <input
                type="text"
                name="location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                placeholder="Enter Farm Location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Soil Type
              </label>
              <select
                name="soilType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {label}
                </label>
                <input
                  type="number"
                  name={name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={generateAIRecommendation}
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg transition duration-300 transform hover:scale-100 shadow-md"
            >
              Generate AI Recommendation
            </button>
          </div>

          {aiRecommendation && (
            <div className="mt-8 p-6 bg-gray-800 text-white border border-green-200 rounded-lg shadow-inner">
              <h3 className="text-2xl font-bold mb-4  ">
                AI Soil Health Recommendations
              </h3>

              {Object.entries(recommendations).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <button
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className="w-full text-left text-xl font-semibold  mb-2 pb-2 border-b-2 border-green-300 flex justify-between items-center"
                  >
                    {category}
                    <span className="">
                      {expandedCategory === category ? "▲" : "▼"}
                    </span>
                  </button>

                  {expandedCategory === category && (
                    <ul className="list-disc list-inside  space-y-2 mt-2">
                      {items.map((rec, index) => (
                        <li key={index} className="ml-4">
                          {rec}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SoilHealthDetection;
