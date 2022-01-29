import "./App.css";
import Web3ContextProvider from "./context/Web3Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";

function App() {
  return (
    <Web3ContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
        </Routes>
      </Router>
    </Web3ContextProvider>
  );
}

export default App;
