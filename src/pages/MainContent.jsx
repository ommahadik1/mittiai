import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MainContent() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleTestClick = () => {
    navigate("/test");
  };

  return (
    <main className="flex flex-col items-center text-center p-5 max-w-3xl mx-auto">
      <p className="text-lg text-gray-600 mb-8">
        {t("main_content.description")}
      </p>
      <button
        onClick={handleTestClick}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded"
      >
        {t("main_content.test_button")}
      </button>
    </main>
  );
}

export default MainContent;
