import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import "@nomiclabs/hardhat-waffle";


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

export default {
  solidity: "0.8.0",
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
};