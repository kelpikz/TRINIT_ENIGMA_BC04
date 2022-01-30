import React, { useState } from "react";
import { Box, Center, FormControl, Input } from "@chakra-ui/react";
import { toast } from "./Toast/useToast";
import clsx from "clsx";

export function RegisterCompany() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [redirectUrl, setRedirectUrl] = useState("");

	const onSubmit = async () => {
		if (!email || !name || !redirectUrl)
			toast.error("All fields are required for registering");
		console.log({ email, name, redirectUrl });
	};

	return (
		<Box w="100%" h="100vh" backgroundColor="#000000">
			<Center h="100vh">
				<Box
					borderRadius={5}
					backgroundColor="white"
					w="500px"
					p={8}
					className="ml-20"
				>
					{/* <Heading mb={8} as="h3" size="xl" className="text-black">
						Register
					</Heading> */}

					<FormControl isRequired>
						<p className="text-gray-600 font-medium mb-2 pl-1 ">
							Company Name :{" "}
						</p>
						<Input
							onChange={(e) => setName(e.target.value)}
							value={name}
							variant="outline"
							placeholder="enter your company name"
							type="email"
							borderColor="GrayText"
							isRequired
							mb={5}
							textColor="black"
						/>
					</FormControl>

					<FormControl isRequired>
						<p className="text-gray-600 font-medium mb-2 pl-1">
							Company Email :{" "}
						</p>
						<Input
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							variant="outline"
							placeholder="Enter your company's email address"
							borderColor="GrayText"
							type="text"
							isRequired
							textColor="black"
							mb={5}
						/>
					</FormControl>

					<FormControl isRequired>
						<p className="text-gray-600 font-medium mb-2 pl-1">
							Redirect Url :{" "}
						</p>
						<Input
							onChange={(e) => setRedirectUrl(e.target.value)}
							value={redirectUrl}
							variant="outline"
							placeholder="Url you want to be redirected after Consent workflow"
							borderColor="GrayText"
							type="text"
							textColor="black"
							isRequired
							mb={5}
						/>
					</FormControl>
					<button
						className={clsx(
							"p-2 bg-accent-2 rounded-lg font-bold text-text w-full mt-2 mx-auto",
							"text-text-accent-1 hover:bg-accent-1"
						)}
						onClick={onSubmit}
					>
						Register
					</button>
				</Box>
				<Box borderRadius={5} w="1000px" h="500px" p={8}>
					<div className=" ml-20">
						<h1 className="text-8xl font-bold text-text-accent-1">
							Come Join Us.
						</h1>
						<p className="text-3xl text-gray-400 pl-2 mt-5 w-4/5">
							After registering the company you will be able to request for the
							user's data.
						</p>
					</div>
				</Box>
			</Center>
		</Box>
	);
}
