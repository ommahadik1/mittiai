import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogoClick = () => {
    navigate("/");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="top-0 left-0 w-full p-5 bg-white z-10 box-border shadow-sm">
      <div className="flex flex-col items-center w-full">
        <div className="mb-4 cursor-pointer" onClick={handleLogoClick}>
          <img
            src="/mitti-logo.jpeg"
            alt="Mitti Logo"
            className="h-80 w-auto"
          />
        </div>
        <nav className="flex items-center">
          <Link to="/" className="ml-5 text-gray-800 hover:underline">
            {t("navbar.features")}
          </Link>
          <Link
            to="/how-it-works"
            className="ml-5 text-gray-800 hover:underline"
          >
            {t("navbar.how_it_works")}
          </Link>
          <Link to="/pricing" className="ml-5 text-gray-800 hover:underline">
            {t("navbar.pricing")}
          </Link>
          <Link to="/test" className="ml-5 text-gray-800 hover:underline">
            {t("navbar.test")}
          </Link>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="ml-5 p-2 border rounded"
            defaultValue={i18n.language}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="mr">मराठी</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
