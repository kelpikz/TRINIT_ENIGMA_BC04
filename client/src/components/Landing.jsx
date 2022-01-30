import "../App.css";
import React, { Suspense } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../deltaLogoWhite.png";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="p-20 h-screen flex justify-center items-start flex-col">
        <h1 className="text-6xl text-text font-bold">{t("welcome_string")}</h1>
        <br />
        <p className="text-text-accent-2 mt-5 text-lg font-medium">
          {t("main_string")}
        </p>
        <br />
        <button
          className={clsx(
            "p-4 bg-accent-1 rounded-lg font-bold text-text mt-5",
            "text-text-accent-1 hover:bg-accent-2"
          )}
          onClick={() => {
            navigate("/register");
          }}
        >
          {t("jny")}
        </button>
      </div>
    </>
  );
};

export const Landing = () => {
  return (
    <Suspense
      fallback={
        <div className="center">
          <img className="img1" src={logo} alt="logo" />
        </div>
      }
    >
      <LandingPage />
    </Suspense>
  );
};
