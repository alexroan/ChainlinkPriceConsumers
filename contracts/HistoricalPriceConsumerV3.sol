pragma solidity ^0.6.7;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract HistoricalPriceConsumerV3 {

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
    function getHistoricalPrice(uint80 roundsBack) public view returns (int256) {
        (uint80 roundId,,,,) = priceFeed.latestRoundData();
        uint80 historicalRoundId = roundId - roundsBack;
        (,int256 answer,,,) = priceFeed.getRoundData(historicalRoundId);
        return answer;
    }
}