require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/71GCG-2_Nn-mi6Oayuww7MPKI71QHa_n", // The RPC endpoint for the Sepolia network.
      
      accounts: ["de547fc63adde7b702aa261bc52a9e12eec73988f744a8ada0e317756a6c982e"], // Your account's private key(s), for example from a `.env` file.
      gasPrice: 10000000000, // Optional gas price to use in GWEI.
      gasLimit: 6000000, // Optional gas limit.
    },
  },
};