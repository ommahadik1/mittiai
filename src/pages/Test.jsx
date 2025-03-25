import React, { useState } from 'react';

const SoilHealthDetection = () => {
  const [formData, setFormData] = useState({
    farmerId: '',
    location: '',
    soilType: '',
    pH: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    organicCarbon: '',
    moistureContent: '',
    conductivity: ''
  });

  const [aiRecommendation, setAiRecommendation] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const generateAIRecommendation = () => {
    // Simulated AI recommendation logic
    const recommendations = {
      lowPH: formData.pH < 6.0 ? "Add lime to increase soil pH and improve nutrient availability." : "",
      lowNitrogen: formData.nitrogen < 20 ? "Apply nitrogen-rich fertilizers or add organic matter like compost." : "",
      lowPhosphorus: formData.phosphorus < 15 ? "Consider phosphate fertilizers or bone meal supplements." : "",
      lowPotassium: formData.potassium < 100 ? "Use potassium-rich fertilizers or add wood ash." : "",
      lowOrganicCarbon: formData.organicCarbon < 1.0 ? "Improve soil organic matter by adding compost, manure, or cover crops." : ""
    };

    const finalRecommendation = Object.values(recommendations)
      .filter(rec => rec !== "")
      .join("\n\n");

    setAiRecommendation(finalRecommendation || "Your soil health looks good! Maintain current practices.");
  };

  const soilTypes = [
    'Clay', 'Sandy', 'Loamy', 'Silt', 'Peaty', 'Chalky', 'Saline'
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
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="col-span-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Soil Test Report
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label 
                  htmlFor="file-upload" 
                  className="flex items-center cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Choose File
                </label>
                {uploadedFile && (
                  <span className="text-sm text-gray-600">
                    {uploadedFile.name}
                  </span>
                )}
              </div>
            </div>

            {/* Soil Parameters Inputs */}
            {[
              { name: 'pH', label: 'Soil pH', placeholder: 'Enter pH Value' },
              { name: 'nitrogen', label: 'Nitrogen (ppm)', placeholder: 'Enter Nitrogen Level' },
              { name: 'phosphorus', label: 'Phosphorus (ppm)', placeholder: 'Enter Phosphorus Level' },
              { name: 'potassium', label: 'Potassium (ppm)', placeholder: 'Enter Potassium Level' },
              { name: 'organicCarbon', label: 'Organic Carbon (%)', placeholder: 'Enter Organic Carbon %' },
              { name: 'moistureContent', label: 'Moisture Content (%)', placeholder: 'Enter Moisture Content' },
              { name: 'conductivity', label: 'Electrical Conductivity (dS/m)', placeholder: 'Enter Conductivity' }
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
              <h3 className="font-bold mb-2 text-blue-800">AI Soil Health Recommendations</h3>
              <p className="text-blue-700 whitespace-pre-line">{aiRecommendation}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SoilHealthDetection;