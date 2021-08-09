var HDWalletProvider = require("truffle-hdwallet-provider");

 
// truffle compile
// truffle migrate --reset --network rinkeby
const mnemonic = "...";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/---");
      },
      network_id: 4,
      networkCheckTimeout: 999999
    }
  },
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.6",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
