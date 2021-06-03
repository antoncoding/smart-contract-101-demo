import { ethers, waffle } from 'hardhat';
import { expect } from 'chai';

import { WETH } from '../typechain'

describe('WETH Tests', function () {
  let weth: WETH

  it("deployment", async function() {
    const WETH = await ethers.getContractFactory("WETH");
    
    weth = await WETH.deploy('name', 'symbol') as WETH;
    
    await weth.deployed();

    expect((await weth.name()) === 'name').to.be.true
    expect((await weth.symbol()) === 'symbol').to.be.true
  });
});
