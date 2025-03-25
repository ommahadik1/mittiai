// Pricing.js
import React from "react";

function Pricing() {
  return (
    <main className="flex flex-col items-center text-center p-5 max-w-3xl mt-20">
      <h1 className="text-4xl font-bold mb-5">Pricing</h1>
      <p className="text-lg text-gray-600 mb-8">
        Mitti pricing details. Choose the plan that best suits your needs.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* AI Personalized Report Card */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full md:w-80">
          <h2 className="text-2xl font-semibold mb-4">Mitti AI Premium</h2>
          <div className="text-4xl font-bold text-orange-400 mb-4">
            ₹99 / Test
          </div>
          <ul className="list-disc list-inside text-left mb-6">
            <li className="py-1">Plant-Based Recommendations</li>
            <li className="py-1">Fertilizer-Based Recommendations</li>
            <li className="py-1">Soil Health Recommendations</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md w-full">
            Buy Now
          </button>
        </div>

        {/* Mitti Kit Pricing Card */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full md:w-80">
          <h2 className="text-2xl font-semibold mb-4">Mitti Kit</h2>
          <div className="text-4xl font-bold text-green-400 mb-4">₹1499</div>
          <ul className="list-disc list-inside text-left mb-6">
            <li className="py-1">pH Level Test</li>
            <li className="py-1">NPK (Nitrogen, Phosphorus, Potassium) Test</li>
            <li className="py-1">Organic Carbon Test</li>
            <li className="py-1">Personalize Report</li>
          </ul>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full">
            Buy Now
          </button>
        </div>

        {/* Premium Mitti Kit Pricing Card */}
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full md:w-80">
          <h2 className="text-2xl font-semibold mb-4">Premium Mitti Kit</h2>
          <div className="text-4xl font-bold text-blue-400 mb-4">₹2499</div>
          <ul className="list-disc list-inside text-left mb-6">
            <li className="py-1">pH Level Test</li>
            <li className="py-1">NPK (Nitrogen, Phosphorus, Potassium) Test</li>
            <li className="py-1">Organic Carbon Test</li>
            <li className="py-1">Moisture Content Test</li>
            <li className="py-1">Electrical Conductivity Test</li>
            <li className="py-1">Personalized Report</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full">
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}

export default Pricing;
