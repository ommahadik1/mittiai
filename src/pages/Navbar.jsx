// Navbar.js
import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full p-5 bg-white z-10 box-border">
      <div className="flex justify-between items-center w-full">
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
      </div>
      <div className="flex justify-center mt-2">
        <span className="text-gray-800 font-semibold">Mitti AI</span>
      </div>
    </header>
  );
}

export default Navbar;