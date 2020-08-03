pragma solidity ^0.6.7;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorInterface.sol";

contract PriceConsumer {

    AggregatorInterface internal priceFeed;
  
    /**
     * Network: Mainnet
     * Aggregator: ETH/USD
     * Address: 0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F
     */
    constructor() public {
        priceFeed = AggregatorInterface(0xF79D6aFBb6dA890132F9D7c355e3015f15F3406F);
    }
  
    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int256) {
        return priceFeed.latestAnswer();
    }

    /**
     * Returns the timestamp of the latest price update
     */
    function getLatestPriceTimestamp() public view returns (uint256) {
        return priceFeed.latestTimestamp();
    }
}