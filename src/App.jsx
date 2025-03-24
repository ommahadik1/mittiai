import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
      <header className="flex justify-between w-full p-5 box-border">
        <div className="flex items-center">
          <img src="/mitti-logo.jpeg" alt="Mitti Logo" className="h-10" />
          <span className="ml-2">Mitti AI</span>
        </div>
        <nav className="flex">
          <a href="#" className="ml-5 text-gray-800 hover:underline">
            Features
          </a>
          <a href="#" className="ml-5 text-gray-800 hover:underline">
            How it Works
          </a>
          <a href="#" className="ml-5 text-gray-800 hover:underline">
            Pricing
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center p-5 max-w-3xl">
        <h1 className="text-4xl font-bold mb-5">
          AI-Powered Soil Health For Better Farming
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Mitti is an AI-powered soil health assessment tool and kit that
          provides real-time, on-field diagnostics for nutrients, pH, and
          physical parameters. Empower your farming decisions with precision
          technology.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded">
          Join the Waitlist
        </button>
      </main>
    </div>
  );
}

export default App;
