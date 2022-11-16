require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MUMBAI_URL = process.env.MUMBAI_URL;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: MUMBAI_URL,
      accounts: [PRIVATE_KEY],
    }
  }
};
