// App.js
import React from "react";
import MainContent from "./pages/MainContent";
import Pricing from "./pages/Pricing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HowItWorks from "./pages/Howitworks";
import Navbar from "./pages/Navbar";
import SoilHealthDetection from "./pages/Test2";
// import SoilHealthDetection from "./pages/Test";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-start min-h-screen bg-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/test" element={<SoilHealthDetection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
