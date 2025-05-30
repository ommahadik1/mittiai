import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SoilHealthDetection = () => {
  const { t } = useTranslation();
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
  const [isGenerating, setIsGenerating] = useState(false);

  const recommendations = {
    [t("soil_health.plant_based_recommendations")]: [
      t("soil_health.plant_rec_1"),
      t("soil_health.plant_rec_2"),
      t("soil_health.plant_rec_3"),
      t("soil_health.plant_rec_4"),
      t("soil_health.plant_rec_5"),
    ],
    [t("soil_health.fertilizer_based_recommendations")]: [
      t("soil_health.fertilizer_rec_1"),
      t("soil_health.fertilizer_rec_2"),
      t("soil_health.fertilizer_rec_3"),
    ],
    [t("soil_health.additional_recommendations")]: [
      t("soil_health.additional_rec_1"),
      t("soil_health.additional_rec_2"),
      t("soil_health.additional_rec_3"),
    ],
  };

  const toggleCategory = (category) => {
    setExpandedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const generateAIRecommendation = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setAiRecommendation(Object.keys(recommendations).join("\n"));
      setIsGenerating(false);
    }, 800);
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
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          {t("soil_health.title")}
        </h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t("soil_health.farmer_id")}
              </label>
              <input
                type="text"
                name="farmerId"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-gray-600"
                placeholder={t("soil_health.farmer_id_placeholder")}
                value={formData.farmerId}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t("soil_health.farm_location")}
              </label>
              <input
                type="text"
                name="location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-gray-600"
                placeholder={t("soil_health.farm_location_placeholder")}
                value={formData.location}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t("soil_health.soil_type")}
              </label>
              <select
                name="soilType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-gray-600"
                value={formData.soilType}
                disabled
              >
                <option value="">
                  {t("soil_health.soil_type_placeholder")}
                </option>
                {soilTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {[
              {
                name: "pH",
                label: t("soil_health.ph_label"),
                placeholder: t("soil_health.ph_placeholder"),
              },
              {
                name: "nitrogen",
                label: t("soil_health.nitrogen_label"),
                placeholder: t("soil_health.nitrogen_placeholder"),
              },
              {
                name: "phosphorus",
                label: t("soil_health.phosphorus_label"),
                placeholder: t("soil_health.phosphorus_placeholder"),
              },
              {
                name: "potassium",
                label: t("soil_health.potassium_label"),
                placeholder: t("soil_health.potassium_placeholder"),
              },
              {
                name: "organicCarbon",
                label: t("soil_health.organic_carbon_label"),
                placeholder: t("soil_health.organic_carbon_placeholder"),
              },
              {
                name: "moistureContent",
                label: t("soil_health.moisture_content_label"),
                placeholder: t("soil_health.moisture_content_placeholder"),
              },
              {
                name: "conductivity",
                label: t("soil_health.conductivity_label"),
                placeholder: t("soil_health.conductivity_placeholder"),
              },
            ].map(({ name, label, placeholder }) => (
              <div key={name}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {label}
                </label>
                <input
                  type="number"
                  name={name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-gray-600"
                  placeholder={placeholder}
                  value={formData[name]}
                  readOnly
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={generateAIRecommendation}
              disabled={isGenerating}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:bg-gray-900 disabled:opacity-75 disabled:cursor-not-allowed shadow-md"
            >
              {isGenerating
                ? t("soil_health.generating")
                : t("soil_health.generate_button")}
            </button>
          </div>

          {isGenerating && (
            <div className="mt-8 flex justify-center items-center">
              <div className="flex space-x-2">
                <div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  style={{
                    animation: "bounce 0.6s infinite 0ms",
                    "@keyframes bounce": {
                      "0%, 100%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-10px)" },
                    },
                  }}
                ></div>
                <div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  style={{
                    animation: "bounce 0.6s infinite 150ms",
                    "@keyframes bounce": {
                      "0%, 100%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-10px)" },
                    },
                  }}
                ></div>
                <div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  style={{
                    animation: "bounce 0.6s infinite 300ms",
                    "@keyframes bounce": {
                      "0%, 100%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-10px)" },
                    },
                  }}
                ></div>
              </div>
            </div>
          )}

          {aiRecommendation && !isGenerating && (
            <div
              className="mt-8 p-6 bg-gray-800 text-white border border-green-200 rounded-lg shadow-inner"
              style={{
                animation: "fadeIn 0.5s ease-in",
                "@keyframes fadeIn": {
                  "0%": { opacity: 0, transform: "translateY(10px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <h3 className="text-2xl font-bold mb-4">
                {t("soil_health.recommendations_title")}
              </h3>

              {Object.entries(recommendations).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <button
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className="w-full text-left text-xl font-semibold mb-2 pb-2 border-b-2 border-green-300 flex justify-between items-center hover:text-green-200 transition-colors duration-200"
                  >
                    {category}
                    <span>{expandedCategory === category ? "▲" : "▼"}</span>
                  </button>

                  {expandedCategory === category && (
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      {items.map((rec, index) => (
                        <li key={index} className="ml-4 text-gray-200">
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
