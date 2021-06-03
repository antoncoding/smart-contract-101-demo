import { ethers, waffle } from 'hardhat';
import { expect } from 'chai';
import { utils } from 'ethers';

import { WETH } from '../typechain';

describe('WETH Tests', function () {
  let weth: WETH;

  const depositAmount = utils.parseUnits('10', 'ether');

  this.beforeAll('deployment', async function () {
    const WETH = await ethers.getContractFactory('WETH');

    weth = (await WETH.deploy('Wrapped Ether', 'WETH')) as WETH;

    await weth.deployed();

    expect((await weth.name()) === 'Wrapped Ether').to.be.true;
    expect((await weth.symbol()) === 'WETH').to.be.true;
  });

  it('deposit', async function () {
    const [user1] = await ethers.getSigners();
    const wethBalanceBefore = await weth.balanceOf(user1.address);
    const ethBalanceBefore = await user1.getBalance();

    await weth.deposit({ value: depositAmount, gasPrice: 0 });

    const wethBalanceAfter = await weth.balanceOf(user1.address);
    const ethBalanceAfter = await user1.getBalance();

    expect(wethBalanceAfter.sub(wethBalanceBefore).eq(depositAmount)).to.be.true;
    expect(ethBalanceBefore.sub(ethBalanceAfter).eq(depositAmount)).to.be.true;
  });

  it('withdraw', async function () {
    const [user1] = await ethers.getSigners();

    const wethBalanceBefore = await weth.balanceOf(user1.address);
    const ethBalanceBefore = await user1.getBalance();

    await weth.withdraw(depositAmount, { gasPrice: 0 });

    const wethBalanceAfter = await weth.balanceOf(user1.address);
    const ethBalanceAfter = await user1.getBalance();

    expect(wethBalanceBefore.sub(wethBalanceAfter).eq(depositAmount)).to.be.true;
    expect(ethBalanceAfter.sub(ethBalanceBefore).eq(depositAmount)).to.be.true;
  });
});
