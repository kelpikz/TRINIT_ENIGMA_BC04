// import "./App.css";
import Web3ContextProvider from "./context/Web3Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Components from "./components";
import ToastProvider from "./components/Toast/Toast";

function App() {
	return (
		<Web3ContextProvider>
			<ToastProvider>
				<Router>
					<Routes>
						<Route exact path="/" element={<Components.Landing />} />
						<Route
							exact
							path="/register"
							element={<Components.RegisterPage />}
						/>
						<Route exact path="/rsa" element={<Components.RSA />} />
						<Route exact path="/upload" element={<Components.FileUpload />} />
						<Route
							exact
							path="/company/register"
							element={<Components.RegisterCompany />}
						/>
					</Routes>
				</Router>
			</ToastProvider>
		</Web3ContextProvider>
	);
}

export default App;
