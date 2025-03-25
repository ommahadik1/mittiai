// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next"; // Add this
import i18n from "./i18n"; // Import i18n config
import MainContent from "./pages/MainContent";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/Howitworks";
import Navbar from "./pages/Navbar";
import SoilHealthDetection from "./pages/Test2";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
}

export default App;
