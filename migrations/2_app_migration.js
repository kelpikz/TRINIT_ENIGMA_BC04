var Migrations = artifacts.require("./Documents.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
