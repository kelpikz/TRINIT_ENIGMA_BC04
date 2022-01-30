import React, { useState, useContext } from "react";
import { Box, Center, FormControl, Input } from "@chakra-ui/react";
import { Web3Context } from "../context/Web3Context";
import { toast } from "./Toast/useToast";
import clsx from "clsx";

function Registerpage() {
	const { accts, ins } = useContext(Web3Context);

  	if (ins.events) {
    	ins.events
      	.userRegisterResponse()
      	.on("data", (e) => {
			  if(e.returnValues.success){
 				toast.success(e.returnValues.message);
			  }else{
				toast.error(e.returnValues.message);
			  }
			 
		  });
  	}
	
	const [email, setEmail] =useState('');
	const [phonenumber, setPhonenumber] = useState('');
	const [dob, setdob] = useState('');
	const [name, setName] = useState('');
	const [passkey, setPasskey] = useState('');

	const onSubmit = async () => {
		if (email === '' || phonenumber === '' || dob === '' || name === ''|| passkey === '') {
			console.log(email, phonenumber, dob, name, passkey);
			toast.error("all fields are required");
			return;
		}

		try {
			await ins.methods
				.register(name, phonenumber, dob, email)
				.send({ from: accts[0] });
			localStorage.setItem('passkey', passkey);
		} catch (error) {
			toast.error("error in registering, please try again");
			console.log(error);
		}
	};

	return (
		<Box w="100%" h="100vh" backgroundColor="#000000">
			<Center h="100vh">
				<Box borderRadius={5} w="1000px" h="500px" p={8}>
					<div className="mt-10">
						<h1 className="text-9xl font-bold">REGISTER</h1>
						<p className="text-3xl text-gray-400 pl-2 w-4/5">
							We assure you, no one other than you has access to your data
						</p>
					</div>
				</Box>
				<Box
					borderRadius={5}
					backgroundColor="white"
					w="500px"
					p={8}
					className="register"
				>
					{/* <Heading mb={8} as="h3" size="xl" className="text-black">
						Register
					</Heading> */}

					<FormControl isRequired>
						<p className="text-gray-600 font-medium mb-2 pl-1">Email : </p>
						<Input
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							variant="outline"
							placeholder="Enter your email"
							type="email"
							borderColor="GrayText"
							textColor="black"
							isRequired
							mb={5}
						/>
					</FormControl>

					<FormControl isRequired>
						<p className="text-gray-600 font-medium mb-2 pl-1">Name : </p>
						<Input
							onChange={(e) => setName(e.target.value)}
							value={name}
							variant="outline"
							placeholder="Enter your name"
							borderColor="GrayText"
							type="text"
							textColor="black"
							isRequired
							mb={5}
						/>
					</FormControl>

					<FormControl isRequired>
						<p className="text-gray-600 font-medium mb-2 pl-1">
							Date of Birth :{" "}
						</p>
						<Input
							onChange={(e) => setdob(e.target.value)}
							value={dob}
							variant="outline"
							placeholder="Enter your DOB"
							type="date"
							borderColor="GrayText"
							textColor="black"
							isRequired
							mb={5}
						/>
					</FormControl>
					<FormControl isRequired>
						<p className="text-gray-600 font-medium mb-2 pl-1">
							Phone Number :{" "}
						</p>
						<Input
							onChange={(e) => setPhonenumber(e.target.value)}
							value={phonenumber}
							variant="outline"
							placeholder="Enter your Phone Number"
							type="text"
							borderColor="GrayText"
							textColor="black"
							isRequired
							mb={5}
						/>
					</FormControl>
					<FormControl isRequired>
						<p className="text-gray-600 font-medium mb-2 pl-1">
							Passkey :{" "}
						</p>
						<Input
							onChange={(e) => setPasskey(e.target.value)}
							value={passkey}
							variant="outline"
							placeholder="Enter your Passkey"
							type="password"
							borderColor="GrayText"
							textColor="black"
							isRequired
							mb={5}
						/>
					</FormControl>
					<button
						className={clsx(
							"p-2 bg-accent-1 rounded-lg font-bold text-text w-full mt-2 mx-auto",
							"text-text-accent-1 hover:bg-accent-2"
						)}
						onClick={onSubmit}
					>
						Register
					</button>
				</Box>
			</Center>
		</Box>
	);
}

export default Registerpage;
