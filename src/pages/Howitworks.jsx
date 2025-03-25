// HowItWorks.js
import React from "react";

function HowItWorks() {
  return (
    <main className="flex flex-col items-center p-5 max-w-3xl mt-20">
      <h1 className="text-4xl font-bold mb-5 text-center">How Mitti Works</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Understanding Mitti and AI Soil Analysis
        </h2>
        <p className="text-lg text-gray-700 mb-4 text-justify">
          Mitti empowers farmers with advanced soil analysis using our
          AI-powered Mitti Kits. Our technology helps you understand your soil's
          health, optimize fertilizer usage, and improve crop yields.
        </p>
        <p className="text-lg text-gray-700 mb-4 text-justify">
          Our AI analyzes soil test data, providing personalized recommendations
          for plant growth, fertilizer application, and overall soil health
          management.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Using the Mitti Kit
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="mr-3 text-green-500 font-bold">1.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Collect Soil Samples:</strong> Follow the instructions
              provided with your Mitti Kit to collect representative soil
              samples from your field.
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-3 text-green-500 font-bold">2.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Perform Tests:</strong> Use the Mitti Kit to perform the
              necessary soil tests, including pH, NPK, organic carbon, and other
              parameters.
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-3 text-green-500 font-bold">3.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Enter Data on Website:</strong> Go to the "Test" page on
              our website and enter the test results. You can also upload a soil
              test report if you have one.
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-3 text-green-500 font-bold">4.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Get AI Recommendations:</strong> Our AI will analyze the
              data and provide personalized recommendations to improve your soil
              health and crop yields.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Navigating the Website
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="mr-3 text-blue-500 font-bold">1.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Home Page (Features):</strong> Learn about the key
              features of our platform and how they can benefit you.
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-3 text-blue-500 font-bold">2.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>How It Works:</strong> Find detailed guides on using the
              Mitti Kit and our website to analyze your soil.
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-3 text-blue-500 font-bold">3.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Pricing:</strong> Explore our pricing plans and choose the
              one that suits your needs.
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-3 text-blue-500 font-bold">4.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Test:</strong> Enter your soil test data or upload a
              report to receive AI-powered recommendations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Using the Test Page
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="mr-3 text-purple-500 font-bold">1.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Enter Farmer and Location Details:</strong> Provide your
              farmer ID and the location of your farm.
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-3 text-purple-500 font-bold">2.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Select Soil Type:</strong> Choose the soil type from the
              dropdown menu.
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-3 text-purple-500 font-bold">3.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Enter Soil Parameters:</strong> Input the values for pH,
              nitrogen, phosphorus, potassium, organic carbon, moisture content,
              and electrical conductivity.
            </p>
          </div>
          
          <div className="flex items-start">
            <span className="mr-3 text-purple-500 font-bold">5.</span>
            <p className="text-lg text-gray-700 text-justify">
              <strong>Generate AI Recommendation:</strong> Click the "Generate
              AI Recommendation" button to receive personalized insights and
              advice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HowItWorks;
