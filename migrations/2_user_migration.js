var Migrations = artifacts.require("./Users.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
