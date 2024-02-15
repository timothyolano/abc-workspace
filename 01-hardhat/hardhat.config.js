require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    arbsep:{
      url: "https://arb-sepolia.g.alchemy.com/v2/7-SR1N4lMfNuEFw1jeNyww2Vc2lg0QLk",
      accounts: ["c8f063bc04eb583425b3e6939684f60f86d7c8ed356e16e4fbdbf92356cf698f"],

    }
  },
  etherscan: {
    apiKey: {
      arbsep: "MEGR5UH2N3RG11APTHYV3B1V21HKYFCYDS"
    },
    customChains: [
      {
        network: "arbsep",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/"
        }
      }
    ]
  }


};
