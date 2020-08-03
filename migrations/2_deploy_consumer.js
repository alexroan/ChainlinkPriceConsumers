const PriceConsumer = artifacts.require("PriceConsumer");
const PriceConsumerV3 = artifacts.require("PriceConsumerV3");
const HistoricalPriceConsumerV3 = artifacts.require("HistoricalPriceConsumerV3");


module.exports = function (deployer) {
  deployer.deploy(PriceConsumer);
  deployer.deploy(PriceConsumerV3);
  deployer.deploy(HistoricalPriceConsumerV3);
};
