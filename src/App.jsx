// App.js
import React from "react";
import Navbar from "./pages/Navbar";
import MainContent from "./pages/MainContent";

function App() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white font-sans">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
