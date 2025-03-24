// MainContent.js
import React from "react";

function MainContent() {
  return (
    <main className="flex flex-col items-center text-center p-5 max-w-3xl mt-20">
      {" "}
      {/* Add margin-top */}
      <h1 className="text-4xl font-bold mb-5">
        AI-Powered Soil Health For Better Farming
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Mitti is an AI-powered soil health assessment tool and kit that provides
        real-time, on-field diagnostics for nutrients, pH, and physical
        parameters. Empower your farming decisions with precision technology.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded">
        Join the Waitlist
      </button>
    </main>
  );
}

export default MainContent;
