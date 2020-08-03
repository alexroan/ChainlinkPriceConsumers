// Contracts
const PriceConsumer = artifacts.require("PriceConsumer")
const PriceConsumerV3 = artifacts.require("PriceConsumerV3")
const HistoricalPriceConsumerV3 = artifacts.require("HistoricalPriceConsumerV3");


module.exports = async function(callback) {
    try {
      // Fetch accounts from wallet - these are unlocked
      const accounts = await web3.eth.getAccounts()
  
      // Fetch the deployed consumer
      const consumer = await PriceConsumer.deployed()
      console.log('V2 Consumer fetched', consumer.address)
      let price = await consumer.getLatestPrice({from: accounts[0]})
      console.log(`V2 Current Price ${price}`)

      const consumerv3 = await PriceConsumerV3.deployed()
      console.log('V3 Consumer fetched', consumerv3.address)
      let v3Price = await consumerv3.getLatestPrice({from: accounts[0]});
      console.log(`V3 current Price ${v3Price}`);

      const historicalConsumerv3 = await HistoricalPriceConsumerV3.deployed()
      console.log('V3 Historical Consumer fetched', historicalConsumerv3.address)
      let historical = await historicalConsumerv3.getHistoricalPrice(500, {from: accounts[0]});
      console.log(`V3 Historical Price ${historical}`);
    }
    catch(error) {
      console.log(error)
    }
  
    callback()
  }