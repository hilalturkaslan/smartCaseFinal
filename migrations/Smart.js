const Smart = artifacts.require("Smart");

module.exports = function (deployer) {
  deployer.deploy(Smart, "Smart");
};
