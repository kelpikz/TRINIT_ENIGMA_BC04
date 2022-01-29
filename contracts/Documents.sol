// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;
import "./Users.sol";

contract Documents is Users {
    struct Document {
        string ipfsHash;
        bool isuploaded;
    }

    mapping(string => Document) public aadhardocuments;
    mapping(string => Document) public pandocumets;
    mapping(string => Document) public tenthdocuments;
    mapping(string => Document) public twelthdocumets;

    event uploadDocumentResponse(address user, bool success, string message);

    function uploadDocument(string memory ipfsHash, string memory documenttype)
        public
    {
        if (!users[addresstoenigmaId[msg.sender]].isResgistered) {
            emit uploadDocumentResponse(
                msg.sender,
                false,
                "user not registered"
            );
        }

        // switch statemet is not available in sol :(
        if (
            keccak256(abi.encodePacked(documenttype)) ==
            keccak256(abi.encodePacked("aadhar"))
        ) {
            aadhardocuments[addresstoenigmaId[msg.sender]] = Document(
                ipfsHash,
                true
            );
            emit uploadDocumentResponse(
                msg.sender,
                true,
                "aadhar document successfully updated"
            );
            return;
        }

        if (
            keccak256(abi.encodePacked(documenttype)) ==
            keccak256(abi.encodePacked("pan"))
        ) {
            pandocumets[addresstoenigmaId[msg.sender]] = Document(
                ipfsHash,
                true
            );
            emit uploadDocumentResponse(
                msg.sender,
                true,
                "pan document successfully updated"
            );
            return;
        }

        if (
            keccak256(abi.encodePacked(documenttype)) ==
            keccak256(abi.encodePacked("10th"))
        ) {
            tenthdocuments[addresstoenigmaId[msg.sender]] = Document(
                ipfsHash,
                true
            );
            emit uploadDocumentResponse(
                msg.sender,
                true,
                "10 th certificate document successfully updated"
            );
            return;
        }

        if (
            keccak256(abi.encodePacked(documenttype)) ==
            keccak256(abi.encodePacked("12th"))
        ) {
            twelthdocumets[addresstoenigmaId[msg.sender]] = Document(
                ipfsHash,
                true
            );
            emit uploadDocumentResponse(
                msg.sender,
                true,
                "12 th certificate document successfully updated"
            );
            return;
        }

        emit uploadDocumentResponse(
            msg.sender,
            false,
            "unsupported certificate document"
        );
    }

    function getDocument(string memory documenttype)
        public
        view
        returns (string memory, bool)
    {
        if (!users[addresstoenigmaId[msg.sender]].isResgistered) {
            return ("", false);
        }

        if (
            keccak256(abi.encodePacked(documenttype)) ==
            keccak256(abi.encodePacked("aadhar"))
        ) {
            return (
                aadhardocuments[addresstoenigmaId[msg.sender]].ipfsHash,
                aadhardocuments[addresstoenigmaId[msg.sender]].isuploaded
            );
        }

        if (
            keccak256(abi.encodePacked(documenttype)) ==
            keccak256(abi.encodePacked("pan"))
        ) {
            return (
                pandocumets[addresstoenigmaId[msg.sender]].ipfsHash,
                pandocumets[addresstoenigmaId[msg.sender]].isuploaded
            );
        }

        if (
            keccak256(abi.encodePacked(documenttype)) ==
            keccak256(abi.encodePacked("10th"))
        ) {
            return (
                tenthdocuments[addresstoenigmaId[msg.sender]].ipfsHash,
                tenthdocuments[addresstoenigmaId[msg.sender]].isuploaded
            );
        }

        if (
            keccak256(abi.encodePacked(documenttype)) ==
            keccak256(abi.encodePacked("12th"))
        ) {
            return (
                twelthdocumets[addresstoenigmaId[msg.sender]].ipfsHash,
                twelthdocumets[addresstoenigmaId[msg.sender]].isuploaded
            );
        }

        return ("", false);
    }
}
