const Verifier = artifacts.require("Verifier");
const CredentialSystem = artifacts.require("CredentialSystem");

module.exports = function(deployer) {
  // deployer.deploy(Verifier);
  deployer.deploy(CredentialSystem);
};