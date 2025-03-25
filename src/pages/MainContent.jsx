import React from "react";
import { useNavigate } from "react-router-dom";

function MainContent() {
  const navigate = useNavigate();

  const handleTestClick = () => {
    navigate("/test");
  };

  return (
    <main className="flex flex-col items-center text-center p-5 max-w-3xl mx-auto ">
      <p className="text-lg text-gray-600 mb-8">
        Mitti is an AI-powered soil health assessment tool and kit that provides
        real-time, on-field diagnostics for nutrients, pH, and physical
        parameters. Empower your farming decisions with precision technology.
      </p>
      <button
        onClick={handleTestClick}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded"
      >
        Test
      </button>
    </main>
  );
}

export default MainContent;
