import "./App.css";
import Web3ContextProvider from "./context/Web3Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { RegisterPage } from "./components/register";
import clsx from "clsx";

function App() {
  return (
    <Web3ContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </Web3ContextProvider>
  );
}

function Homepage() {
  return (
    <>
      <div className="p-20 h-screen flex justify-center items-start flex-col">
        <h1 className="text-6xl text-text font-bold">Welcome to Enigma 👋</h1>
        <br />
        <p className="text-text-accent-2 mt-5 text-lg font-medium">
          A one stop spot for all your authentication needs.
        </p>
        <br />
        <button
          className={clsx(
            "p-4 bg-accent-1 rounded-lg font-bold text-text mt-5",
            "text-text-accent-1 hover:bg-accent-2"
          )}
        >
          Start the journey
        </button>
      </div>
    </>
  );
}

export default App;
