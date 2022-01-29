import React from 'react';
import {toast as createToast} from 'react-toastify';
import {Heading} from '@chakra-ui/react';


class useToast {
	option; // https://fkhadra.github.io/react-toastify/api/toast By default, all createToast will inherit ToastContainer's props
	constructor(option) {
		this.option = option;
	}

	ToastComponent = ({heading, message}) => {
		return (
			<>
				<Heading size="md" >
					{heading}
				</Heading>
				<b>{message}</b>
			</>
		);
	};

	success = (message) => {
		createToast.success(<this.ToastComponent heading="Success" message={message} />, this.option);
	};
	info = (message) => {
		createToast.info(<this.ToastComponent heading="Info" message={message} />, this.option);
	};
	warn = (message) => {
		createToast.warn(<this.ToastComponent heading="Warning" message={message} />, this.option);
	};
	error = (message) => {
		createToast.error(<this.ToastComponent heading="Error" message={message} />, this.option);
	};
	dark = (message) => {
		createToast.dark(<this.ToastComponent heading="Success" message={message} />, {
			...this.option,
			progressStyle: {background: 'green'},
		});
	};
}

export const toast = new useToast({});
