var Migrations = artifacts.require("./Transactions.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
