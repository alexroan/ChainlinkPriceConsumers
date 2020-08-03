// Contracts
const PriceConsumer = artifacts.require("PriceConsumer")
const PriceConsumerV3 = artifacts.require("PriceConsumerV3")

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
    }
    catch(error) {
      console.log(error)
    }
  
    callback()
  }