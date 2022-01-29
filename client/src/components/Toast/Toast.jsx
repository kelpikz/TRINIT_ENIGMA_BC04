import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import {ToastContainer} from 'react-toastify';

// https://github.com/fkhadra/react-toastify
const Toast = () => {
	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={4000}
				draggable={false}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				pauseOnHover
			/>
		</div>
	);
};

export default Toast;
