# trinitt-hack
Tri nitt hack

## [drive link](https://drive.google.com/drive/folders/1Bd7mzpcSckeBPo4V3UosWvCrrCUdSGiM?usp=sharing)

## Introduction
Identity Management

Identity has a problem. If it’s paper-based, such as birth certificates
sitting idly in a basement of a town hall, it’s subject to loss, theft or
fraud. A digital identity reduces the level of bureaucracy and increases
the speed of processes within organisations by allowing for a greater
interoperability between departments and other institutions. But if
this digital identity is stored on a centralised server, it becomes a target
for hackers. Since 2017 alone, more than 600 million personal details –
such as addresses or credit card numbers – have been hacked, leaked
or breached from organisations.

Most of the current identity management systems are weak and
outdated and hence companies “outsourced” their identity
management to major corporations like Google or Facebook who
have an economic interest in ammassing such large databases of
personal data, so we see options like “Login with Google” or “Login with
Facebook” functionalities. This raises privacy and security concerns as
Facebook or Google are being called as the “middlemen of trust”.

## Technology Used

* React
* Node.js
* Express
* MongoDB
* Truffle
* Ganache
* Web3
* Solidity
* Ethereum
* i18n
* TailwindCSS
* ChakraUI
* FlowByte
* openpgp specifcations
* IPFS
* elliptic curve cryptography


## Features
* Multi-language support
* Blockchain based identity management
* Uploading and storing of documents
* End to end encryption of documents
* OAuth2.0 spec based authorization of users and access to resources
* File management
* Company registration
* Transaction management
* File transaction score - Trust score

## Proposed Method
![flow](flow.png)

implemented oauth2.0 spec based authorization flow

### Flow
- Company/government body request for user data
- User will be notified about the request
- User can accept/reject client request
- All the files data will be fetched from the ipfs and ethereum network
- Fetched files will be encrypted with the client public key will be send back (using elliptic curve cryptography)

### TODO
- consent flow frontend integration

## Install truffle
```bash
    npm i -g truffle
```

## local blockchain setup
- install [ganache](https://trufflesuite.com/ganache) or use `truffle develop` command

## truffle commands (run in `truffle console` or use truffle as prefix)
- `compile`
- `migrate`
- `test`

## client setup
```bash
    npm install && npm start
```
