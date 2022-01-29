import React, { useState,useContext } from 'react';
import {Box,Center, Heading,  FormControl,Input,Button} from '@chakra-ui/react';
import { Web3Context } from "../context/Web3Context";
import { toast } from './Toast/useToast';


function Registerpage() {
  	const { accts, ins } = useContext(Web3Context);

	    // listening to event from blockchain i.e contract
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

	const onSubmit = async () => {
		if (email === '' || phonenumber === '' || dob === '' || name === ''){
			toast.error("all fields are required");
			return;
		}

		try {
			await ins.methods.register(name,phonenumber,dob,email).send({from: accts[0]});
		} catch (error) {
			toast.error("error in registering, please try again");
			console.log(error);
		}

	}

  return (
  <Box w="100%" h="100vh" backgroundColor="#000000">
	  <Center h="100vh">
		  <Box borderRadius={5} backgroundColor="white" w="500px" h="420px" p={8}>
			  <Heading mb={8} as="h3" size="xl">
				  Register
			  </Heading>

			  <FormControl isRequired>
  				<Input onChange={(e)=> setEmail(e.target.value)} value={email} variant='outline' placeholder='email' type='email' isRequired mb={5}/>
			 </FormControl>

			  <FormControl isRequired>
				<Input onChange={(e)=> setName(e.target.value)} value={name} variant='outline' placeholder='name' type='text' isRequired mb={5} />
			 </FormControl>
				
				
			<FormControl isRequired>	
				<Input onChange={(e)=> setdob(e.target.value)} value={dob} variant='outline' placeholder='DOB' type='text' isRequired mb={5} />
			 </FormControl>
			<FormControl isRequired >	
				<Input onChange={(e)=> setPhonenumber(e.target.value)} value={phonenumber} variant='outline' placeholder='phonenumber' type='text' isRequired mb={5} />
			 </FormControl>

			 <Button onClick={onSubmit} size="md" width="100%" colorScheme='teal'>Register</Button>
		  </Box>

	  </Center>
  </Box>
  );
}

export default Registerpage;
