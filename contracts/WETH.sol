//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WETH is ERC20 {

  constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
    
  }

  // user burn weth and withdraw eth
  function withdraw(uint256 _amount) external {
    uint256 temp = _amount;
  }

  // user put eth, get weth out
  function deposit() payable external {
    uint256 temp = 0;
  }
}
