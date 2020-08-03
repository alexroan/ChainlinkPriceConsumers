pragma solidity ^0.6.7;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Mainnet
     * Aggregator: ETH/USD
     * Address: 0x6f09A08FEb29c1d517a32B9e77BA78D6E6595984
     */
    constructor() public {
        priceFeed = AggregatorV3Interface(0x6f09A08FEb29c1d517a32B9e77BA78D6E6595984);
    }
  
    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int256) {
        (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return answer;
    }
}