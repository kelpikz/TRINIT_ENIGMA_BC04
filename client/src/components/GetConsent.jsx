import { Box, Center } from "@chakra-ui/react";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { generateKeys } from "../utils/ec255";
import axios from "axios";
export const GetConsent = () => {
	const search = useLocation().search;

	const [publicKey, setPublicKey] = useState("");
	const [company, setCompany] = useState("Company-xyz");

	useEffect(() => {
		const name = new URLSearchParams(search).get("company");
		const com = new URLSearchParams(search).get("key");
		setCompany(name);
		setPublicKey(com);
		generateKeys().then((a) => {
			console.log(encodeURI(a.publicKey));
		});
	}, [search]);

	const onAccept = async () => {
		console.log(publicKey);
		axios.get("/");
	};

	return (
		<Box w="100%" h="100vh">
			<Center h="100vh">
				<Box
					borderRadius={5}
					backgroundColor="white"
					w="650px"
					p={8}
					className="text-black"
				>
					<h1 className="text-black text-3xl font-semibold">
						Share your details with {company} ?
					</h1>
					<p className="text-black pl-1">
						<span className="text-gray-500">
							Do you wish to share the following details with the company ?
						</span>
						<br />
						<br />
						<li>Your name</li>
						<li>Phone Number</li>
						<li>Date of Birth</li>
						<br />
						<strong>Certificates</strong>
						<li>Birth Certificate</li>
						<li>Aadhar Card</li>
						<li>10th Certificate</li>
						<li>12th Certificate</li>
					</p>
					<br />
					<button
						className={clsx(
							"p-2 bg-accent-1 rounded-lg font-bold text-text w-2/5 mt-2",
							"text-text-accent-1 hover:bg-accent-2 inline"
						)}
						onClick={onAccept}
					>
						Accept
					</button>{" "}
					<button
						className={clsx(
							"p-2 bg-white rounded-lg font-bold text-text w-2/5 mt-2",
							"text-accent-1 border-2 border-accent-1  hover:bg-accent-2 inline",
							"hover:text-white"
						)}
						onClick={onAccept}
					>
						Accept
					</button>
				</Box>
			</Center>
		</Box>
	);
};
