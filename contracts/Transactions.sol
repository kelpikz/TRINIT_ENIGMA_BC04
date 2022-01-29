// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;
import "./Documents.sol";
pragma experimental ABIEncoderV2;

contract Transactions is Documents {
    struct Transaction {
        string enigmaId;
        string company;
        string[] documents;
    }

    mapping(string => Transaction[]) enigmaIdtoTransactions;

    event addTransactionResponse(address user, bool success, string message);

    function addTransaction(string memory company, string[] memory documents)
        public
    {
        if (!users[addresstoenigmaId[msg.sender]].isResgistered) {
            emit addTransactionResponse(
                msg.sender,
                false,
                "user not registered"
            );

            return;
        }

        enigmaIdtoTransactions[addresstoenigmaId[msg.sender]].push(
            Transaction(addresstoenigmaId[msg.sender], company, documents)
        );

        emit addTransactionResponse(
            msg.sender,
            true,
            "transaction added successfully"
        );
    }

    function getTransaction() public view returns (Transaction[] memory) {
        return enigmaIdtoTransactions[addresstoenigmaId[msg.sender]];
    }
}
