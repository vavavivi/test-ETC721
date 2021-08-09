const DrawingCollectible = artifacts.require("DrawingCollectible");
const Vote = artifacts.require("Vote");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(DrawingCollectible, { from: accounts[0] });
    deployer.deploy(Vote);
};