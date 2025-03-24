// Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full p-5 bg-white z-10 box-border">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src="/mitti-logo.jpeg" alt="Mitti Logo" className="h-16" />{" "}
          {/* Make logo bigger */}
        </div>
        <nav className="flex">
          <Link to="/" className="ml-5 text-gray-800 hover:underline">
            Features
          </Link>
          <Link
            to="/how-it-works"
            className="ml-5 text-gray-800 hover:underline"
          >
            How it Works
          </Link>
          <Link to="/pricing" className="ml-5 text-gray-800 hover:underline">
            Pricing
          </Link>
          <Link to="/test" className="ml-5 text-gray-800 hover:underline">
            Test
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
