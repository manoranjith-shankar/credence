const AppHandler = artifacts.require("AppHandler");

module.exports = function(deployer) {
  deployer.deploy(AppHandler);
};