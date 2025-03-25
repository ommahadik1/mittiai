import React from "react";
import { useTranslation } from "react-i18next";

function Pricing() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center text-center p-5 max-w-3xl mt-20">
      <h1 className="text-4xl font-bold mb-5">{t("pricing.title")}</h1>
      <p className="text-lg text-gray-600 mb-8">{t("pricing.description")}</p>

      <div className="flex flex-wrap justify-center gap-8 md:w-screen">
        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full md:w-80">
          <h2 className="text-2xl font-semibold mb-4">
            {t("pricing.premium_title")}
          </h2>
          <div className="text-4xl font-bold text-orange-400 mb-4">
            ₹99 / Test
          </div>
          <ul className="list-disc list-inside text-left mb-6">
            <li className="py-1">{t("pricing.premium_feature_1")}</li>
            <li className="py-1">{t("pricing.premium_feature_2")}</li>
            <li className="py-1">{t("pricing.premium_feature_3")}</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md w-full">
            {t("pricing.buy_now")}
          </button>
        </div>

        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full md:w-80">
          <h2 className="text-2xl font-semibold mb-4">
            {t("pricing.kit_title")}
          </h2>
          <div className="text-4xl font-bold text-green-400 mb-4">₹1499</div>
          <ul className="list-disc list-inside text-left mb-6">
            <li className="py-1">{t("pricing.kit_feature_1")}</li>
            <li className="py-1">{t("pricing.kit_feature_2")}</li>
            <li className="py-1">{t("pricing.kit_feature_3")}</li>
            <li className="py-1">{t("pricing.kit_feature_4")}</li>
          </ul>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full">
            {t("pricing.buy_now")}
          </button>
        </div>

        <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full md:w-80">
          <h2 className="text-2xl font-semibold mb-4">
            {t("pricing.premium_kit_title")}
          </h2>
          <div className="text-4xl font-bold text-blue-400 mb-4">₹2499</div>
          <ul className="list-disc list-inside text-left mb-6">
            <li className="py-1">{t("pricing.premium_kit_feature_1")}</li>
            <li className="py-1">{t("pricing.premium_kit_feature_2")}</li>
            <li className="py-1">{t("pricing.premium_kit_feature_3")}</li>
            <li className="py-1">{t("pricing.premium_kit_feature_4")}</li>
            <li className="py-1">{t("pricing.premium_kit_feature_5")}</li>
            <li className="py-1">{t("pricing.premium_kit_feature_6")}</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full">
            {t("pricing.buy_now")}
          </button>
        </div>
      </div>
    </main>
  );
}

export default Pricing;
