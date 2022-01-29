// import "./App.css";
import Web3ContextProvider from "./context/Web3Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { FileUploadCmpt } from "./components/FileUpload";
import Toast from "./components/Toast/Toast";
import RegisterPage from "./components/register";

function App() {
  return (
    <>
      <Web3ContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/upload" element={<FileUploadCmpt />} />
          </Routes>
        </Router>
      </Web3ContextProvider>

      <Toast />
    </>
  );
}

export default App;
