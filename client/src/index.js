import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@themesberg/flowbite";
import { ChakraProvider } from "@chakra-ui/react";
import logo from "./deltaLogoWhite.png";

import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="center">
        <img className="img1" src={logo} alt="logo" />
      </div>}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
