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
        {/* Mitti Kit Pricing Card */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-80">
          <h2 className="text-2xl font-semibold mb-4">Mitti Kit</h2>
          <div className="text-4xl font-bold text-green-600 mb-4">₹399</div>
          <ul className="list-disc list-inside text-left mb-6">
            <li>pH Level Test</li>
            <li>NPK (Nitrogen, Phosphorus, Potassium) Test</li>
            <li>Organic Carbon Test</li>
          </ul>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full">
            Get Now
          </button>
        </div>

        {/* Add more pricing cards here if needed */}
        {/* Example for a second plan: */}

        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-80">
          <h2 className="text-2xl font-semibold mb-4">Premium Mitti Kit</h2>
          <div className="text-4xl font-bold text-blue-600 mb-4">₹999</div>
          <ul className="list-disc list-inside text-left mb-6">
            <li>pH Level Test</li>
            <li>NPK (Nitrogen, Phosphorus, Potassium) Test</li>
            <li>Organic Carbon Test</li>
            <li>Moisture Content Test</li>
            <li>Electrical Conductivity Test</li>
            <li>Personalized Report</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full">
            Get Now
          </button>
        </div>
      </div>
    </main>
  );
}

export default Pricing;
