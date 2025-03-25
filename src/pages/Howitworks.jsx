import React from "react";

function HowItWorks() {
  return (
    <main className="flex flex-col items-center p-5 max-w-3xl mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">
        🌱 How Mitti Works: Smart Farming Made Simple! ✨
      </h1>

      <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          🔬 AI Soil Analysis 🚀
        </h2>
        <ul className="list-disc list-inside text-left text-gray-300">
          <li className="mb-4">
            <strong className="text-blue-400">Step 1:</strong> Mitti’s AI
            analyzes soil data from your Mitti Kit.
          </li>
          <li className="mb-4">
            <strong className="text-blue-400">Step 2:</strong> Get personalized
            insights on plant growth, fertilizers & soil health.
          </li>
          <li className="mb-4">
            <strong className="text-blue-400">Step 3:</strong> Optimize farming
            for better yields!
          </li>
        </ul>
      </section>

      <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          🛠 Using the Mitti Kit 🧪
        </h2>
        <ol className="list-decimal list-inside text-left text-gray-300">
          <li className="mb-4">
            <strong className="text-green-400">Step 1:</strong> Collect soil
            samples as per kit instructions.
          </li>
          <li className="mb-4">
            <strong className="text-green-400">Step 2:</strong> Test for pH,
            NPK, organic carbon, etc.
          </li>
          <li className="mb-4">
            <strong className="text-green-400">Step 3:</strong> Enter results on
            the Test Page.
          </li>
          <li className="mb-4">
            <strong className="text-green-400">Step 4:</strong> Get AI-powered
            advice!
          </li>
        </ol>
      </section>

      <section className="mb-12 p-6 bg-gray-800 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          🌍 Navigating the Website 🏠
        </h2>
        <ul className="list-disc list-inside text-left text-gray-300">
          <li className="mb-4">
            <strong className="text-purple-400">Home:</strong> Explore Mitti’s
            benefits.
          </li>
          <li className="mb-4">
            <strong className="text-purple-400">How It Works:</strong> Learn to
            use the kit & website.
          </li>
          <li className="mb-4">
            <strong className="text-purple-400">Pricing:</strong> Pick a plan.
          </li>
          <li className="mb-4">
            <strong className="text-purple-400">Test:</strong> Enter soil data &
            get insights.
          </li>
        </ul>
      </section>

      <section className="p-6 bg-gray-800 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          📌 Using the Test Page 📊
        </h2>
        <ol className="list-decimal list-inside text-left text-gray-300">
          <li className="mb-4">
            <strong className="text-red-400">Step 1:</strong> Enter Farmer ID &
            Location.
          </li>
          <li className="mb-4">
            <strong className="text-red-400">Step 2:</strong> Select Soil Type.
          </li>
          <li className="mb-4">
            <strong className="text-red-400">Step 3:</strong> Input soil
            parameters.
          </li>
          <li className="mb-4">
            <strong className="text-red-400">Step 4:</strong> Get AI
            recommendations.
          </li>
        </ol>
      </section>

      <p className="mt-8 text-lg text-center text-green-400 font-semibold">
        🚜 Mitti helps you grow smarter! Start today! 🌱✨
      </p>
    </main>
  );
}

export default HowItWorks;
