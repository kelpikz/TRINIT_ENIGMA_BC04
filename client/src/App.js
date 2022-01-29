import "./App.css";
import Web3ContextProvider from "./context/Web3Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { RegisterPage } from "./components/register";
import  {FileUploadCmpt } from "./components/FileUpload";


function App() {
  return (
    <Web3ContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<RegisterPage />} />
          <Route exact path="/home" element={<Landing />} />
          <Route exact path="/upload" element={<FileUploadCmpt />} />
        </Routes>
      </Router>
    </Web3ContextProvider>
  );
}

export default App;
