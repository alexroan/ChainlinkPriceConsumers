const PriceConsumer = artifacts.require("PriceConsumer");
const PriceConsumerV3 = artifacts.require("PriceConsumerV3");

module.exports = function (deployer) {
  deployer.deploy(PriceConsumer);
  deployer.deploy(PriceConsumerV3);
};
