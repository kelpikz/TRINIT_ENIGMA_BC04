import React, { useContext, useEffect } from "react";
import {
  Box,
  Center,
  Heading,
  FormControl,
  Input,
  Button,
  SimpleGrid,
  Badge,
  Text,
} from "@chakra-ui/react";
import { Web3Context } from "../context/Web3Context";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "./Toast/useToast";

// pan is birth cert :)
const documentTypes = ["aadhar", "10th", "12th", "pan"];

function FilesDiv({ documentType, accts, ins }) {
  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await ins.methods.getDocument(documentType);
        console.log(response).send({ from: accts[0] });
      } catch (error) {
        toast.error(`error fetching ${documentType} certificate`);
      }
    };

    fetchDocument();
  });
  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      p={15}
      pb={20}
    >
      <Badge borderRadius="full" px="5" py="1">
        {documentType}
      </Badge>

      <Text as="h3" my={5} fontWeight="bold" fontSize="2xl">
        Document
      </Text>

      <Text>status</Text>
    </Box>
  );
}

const Files = () => {
  const { accts, ins } = useContext(Web3Context);
  const { user } = useContext(userContext);

  const navigate = useNavigate();

  if (user === null) {
    toast.error("user not authenticated");
    navigate("/");
  }

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      spacing={{ base: 10, md: 15 }}
      p={50}
    >
      {documentTypes.map((type, key) => (
        <FilesDiv key={key} accts={accts} ins={ins} />
      ))}
    </SimpleGrid>
  );
};

export default Files;
