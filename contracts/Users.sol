// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract Users {
    uint256 totalUsers;
    string upiIdPostfix;

    constructor() public {
        totalUsers = 0;
        upiIdPostfix = "@enigma";
    }

    struct User {
        string enigmaId;
        string name;
        string phonenumber;
        string DOB;
        string email;
        bool isResgistered;
    }

    // registered users
    // key -> enigmaid (phonenumber + @enigma) like upi id :)
    mapping(string => User) public users;
    mapping(address => string) public addresstoenigmaId;

    event userRegisterResponse(address user, bool success, string message);

    // registers user with the required data
    // event will be emitted after registration
    function regiter(
        string memory name,
        string memory phonenumber,
        string memory DOB,
        string memory email
    ) public {
        string memory enigmaId = string(
            abi.encodePacked(phonenumber, upiIdPostfix)
        );

        if (users[enigmaId].isResgistered) {
            emit userRegisterResponse(
                msg.sender,
                true,
                "user already registered!"
            );

            return;
        }

        totalUsers++;

        users[enigmaId] = User(enigmaId, name, phonenumber, DOB, email, true);
        addresstoenigmaId[msg.sender] = enigmaId;

        emit userRegisterResponse(msg.sender, true, "registered successfully!");
    }

    // getUser returns user data for a given enigma id
    function getUser() public view returns (User memory) {
        return users[addresstoenigmaId[msg.sender]];
    }
}
