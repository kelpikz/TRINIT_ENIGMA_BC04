import React, { useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { toast } from "./Toast/useToast";
import { userContext } from "../context/UserContext";

// pan is birth cert :)
const documentTypes = ["aadhar", "10th", "12th", "pan"];

function FilesDiv({ documentType }) {
  const { accts, ins } = useContext(Web3Context);

  const [file, setFile] = useState({
    fileHash: "",
    status: false,
  });

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        if (!ins || !accts) return;

        console.log("fetching " + documentType + " document");
        const response = await ins.methods
          .getDocument(documentType)
          .call({ from: accts[0] });
        console.log(response);
        setFile({
          fileHash: response[0],
          status: response[1],
        });
      } catch (error) {
        console.log(error);
        toast.error(`error fetching ${documentType} certificate`);
      }
    };

    fetchDocument();
  }, [accts, ins]);

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
        {documentType === "pan" ? "birth certificate" : documentType}
      </Badge>

      <Text as="h3" my={5} fontWeight="bold" fontSize="2xl">
        Document
      </Text>

      <Text p={5}>uploaded status : {file.status ? "Success" : "Failure"}</Text>
      <Text p={5}>ipfsHash : {file.fileHash} </Text>
    </Box>
  );
}

export const Files = () => {
  const { user } = useContext(userContext);

  const navigate = useNavigate();

  // if (user === null) {
  //   navigate("/");
  //   toast.error("uer not authenticated");
  // }

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      spacing={{ base: 10, md: 15 }}
      p={50}
    >
      {documentTypes.map((type, key) => (
        <FilesDiv key={key} documentType={type} />
      ))}
    </SimpleGrid>
  );
};
