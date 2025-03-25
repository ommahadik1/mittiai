import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function Navbar() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogoClick = () => {
    navigate("/"); // Redirect to home page when logo is clicked
  };

  return (
    <>
      <header className="top-0 left-0 w-full p-5 bg-white z-10 box-border shadow-sm">
        <div className="flex flex-col items-center w-full">
          <div className="mb-4 cursor-pointer" onClick={handleLogoClick}> {/* Added onClick handler and cursor pointer */}
            <img
              src="/mitti-logo.jpeg"
              alt="Mitti Logo"
              className="h-80 w-auto"
            />
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
    </>
  );
}

export default Navbar;