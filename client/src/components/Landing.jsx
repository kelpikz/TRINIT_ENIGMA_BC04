import "../App.css";
import React, { Suspense } from 'react';
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from 'react-i18next';

export const LandingPage = () => {
	const navigate = useNavigate();
	const {t, i18n} = useTranslation()
	return (
		<>
			<div className="p-20 h-screen flex justify-center items-start flex-col">
				<h1 className="text-6xl text-text font-bold"><Trans>Welcome to Enigma 👋</Trans></h1>
				<br />
				<p className="text-text-accent-2 mt-5 text-lg font-medium">
					{t('A one stop spot for all your authentication needs.')}
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
					{t('Start the journey')}
				</button>
			</div>
		</>
	);
};

export const Landing = () =>{
	return (
	  <Suspense fallback="loading">
		<LandingPage />
	  </Suspense>
	);
  }