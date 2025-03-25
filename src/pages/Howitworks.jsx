import React from "react";
import "./Howitworks.css";
import { useTranslation } from "react-i18next";

function HowItWorks() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center p-5 max-w-3xl mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700">
        {t("how_it_works.title")}
      </h1>

      <section className="mb-12 p-6 bg-green-100 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          {t("how_it_works.ai_soil_analysis")}
        </h2>
        <ul className="list-disc list-inside text-left text-gray-700">
          <li className="mb-4">
            <strong className="text-blue-600">
              {t("how_it_works.step_1_label")}:
            </strong>{" "}
            {t("how_it_works.ai_step_1")}
          </li>
          <li className="mb-4">
            <strong className="text-blue-600">
              {t("how_it_works.step_2_label")}:
            </strong>{" "}
            {t("how_it_works.ai_step_2")}
          </li>
          <li className="mb-4">
            <strong className="text-blue-600">
              {t("how_it_works.step_3_label")}:
            </strong>{" "}
            {t("how_it_works.ai_step_3")}
          </li>
        </ul>
      </section>

      <section className="mb-12 p-6 bg-blue-100 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          {t("how_it_works.mitti_kit")}
        </h2>
        <ol className="list-decimal list-inside text-left text-gray-700">
          <li className="mb-4">
            <strong className="text-green-600">
              {t("how_it_works.step_1_label")}:
            </strong>{" "}
            {t("how_it_works.mitti_step_1")}
          </li>
          <li className="mb-4">
            <strong className="text-green-600">
              {t("how_it_works.step_2_label")}:
            </strong>{" "}
            {t("how_it_works.mitti_step_2")}
          </li>
          <li className="mb-4">
            <strong className="text-green-600">
              {t("how_it_works.step_3_label")}:
            </strong>{" "}
            {t("how_it_works.mitti_step_3")}
          </li>
          <li className="mb-4">
            <strong className="text-green-600">
              {t("how_it_works.step_4_label")}:
            </strong>{" "}
            {t("how_it_works.mitti_step_4")}
          </li>
        </ol>
      </section>

      <section className="mb-12 p-6 bg-yellow-100 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          {t("how_it_works.navigating_website")}
        </h2>
        <ul className="list-disc list-inside text-left text-gray-700">
          <li className="mb-4">
            <strong className="text-purple-600">
              {t("how_it_works.home_label")}:
            </strong>{" "}
            {t("how_it_works.nav_home")}
          </li>
          <li className="mb-4">
            <strong className="text-purple-600">
              {t("how_it_works.how_it_works_label")}:
            </strong>{" "}
            {t("how_it_works.nav_how_it_works")}
          </li>
          <li className="mb-4">
            <strong className="text-purple-600">
              {t("how_it_works.pricing_label")}:
            </strong>{" "}
            {t("how_it_works.nav_pricing")}
          </li>
          <li className="mb-4">
            <strong className="text-purple-600">
              {t("how_it_works.test_label")}:
            </strong>{" "}
            {t("how_it_works.nav_test")}
          </li>
        </ul>
      </section>

      <section className="p-6 bg-pink-100 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          {t("how_it_works.test_page")}
        </h2>
        <ol className="list-decimal list-inside text-left text-gray-700">
          <li className="mb-4">
            <strong className="text-red-600">
              {t("how_it_works.step_1_label")}:
            </strong>{" "}
            {t("how_it_works.test_step_1")}
          </li>
          <li className="mb-4">
            <strong className="text-red-600">
              {t("how_it_works.step_2_label")}:
            </strong>{" "}
            {t("how_it_works.test_step_2")}
          </li>
          <li className="mb-4">
            <strong className="text-red-600">
              {t("how_it_works.step_3_label")}:
            </strong>{" "}
            {t("how_it_works.test_step_3")}
          </li>
          <li className="mb-4">
            <strong className="text-red-600">
              {t("how_it_works.step_4_label")}:
            </strong>{" "}
            {t("how_it_works.test_step_4")}
          </li>
        </ol>
      </section>

      <p className="mt-8 text-lg text-center text-green-700 font-semibold">
        {t("how_it_works.footer")}
      </p>
    </main>
  );
}

export default HowItWorks;
