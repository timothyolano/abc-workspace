
pragma solidity ^0.8.9;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ShoegazeCoin is ERC20 {

    //symbol: SC
    //initial Supply: 1_000

    constructor() ERC20("Shoegaze Coin Forever", "SC") {
        _mint(msg.sender, 1000000000000000000000);
    



    }

}