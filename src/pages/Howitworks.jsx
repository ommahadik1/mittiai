import React from "react";

function HowItWorks() {
  return (
    <main className="flex flex-col items-center p-5 max-w-3xl mt-20">
      <h1 className="text-4xl font-bold mb-5 text-center">How Mitti Works</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Understanding Mitti and AI Soil Analysis
        </h2>
        <ul className="list-disc list-inside text-left">
          <li className="mb-2">
            <strong>Step 1: AI-Powered Soil Analysis:</strong> Mitti uses AI to
            analyze soil data from our Mitti Kits.
          </li>
          <li className="mb-2">
            <strong>Step 2: Personalized Recommendations:</strong> Receive
            insights on plant growth, fertilizer use, and soil health.
          </li>
          <li className="mb-2">
            <strong>Step 3: Improved Crop Yields:</strong> Optimize your farming
            practices for better results.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Using the Mitti Kit - Steps
        </h2>
        <ol className="list-decimal list-inside text-left">
          <li className="mb-2">
            <strong>Step 1: Collect Samples:</strong> Follow the kit's
            instructions for accurate soil sampling.
          </li>
          <li className="mb-2">
            <strong>Step 2: Perform Tests:</strong> Use the kit to test pH, NPK,
            organic carbon, etc.
          </li>
          <li className="mb-2">
            <strong>Step 3: Enter Data:</strong> Input test results on the
            "Test" page.
          </li>
          <li className="mb-2">
            <strong>Step 4: Get AI Advice:</strong> Receive personalized
            recommendations from our AI.
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Navigating the Website - Steps
        </h2>
        <ul className="list-disc list-inside text-left">
          <li className="mb-2">
            <strong>Step 1: Home (Features):</strong> Learn about our platform's
            benefits.
          </li>
          <li className="mb-2">
            <strong>Step 2: How It Works:</strong> Find guides on using the kit
            and website.
          </li>
          <li className="mb-2">
            <strong>Step 3: Pricing:</strong> Choose a plan that fits your
            needs.
          </li>
          <li className="mb-2">
            <strong>Step 4: Test:</strong> Enter soil data for AI analysis.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Using the Test Page - Steps
        </h2>
        <ol className="list-decimal list-inside text-left">
          <li className="mb-2">
            <strong>Step 1: Enter Details:</strong> Provide farmer ID and
            location.
          </li>
          <li className="mb-2">
            <strong>Step 2: Select Soil Type:</strong> Choose from the
            dropdown.
          </li>
          <li className="mb-2">
            <strong>Step 3: Input Parameters:</strong> Enter pH, NPK, organic
            carbon, etc.
          </li>
          <li className="mb-2">
            <strong>Step 4: Generate Advice:</strong> Get AI-powered
            recommendations.
          </li>
        </ol>
      </section>
    </main>
  );
}

export default HowItWorks;