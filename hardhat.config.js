require('dotenv').config();
const data = require('./data.json');
const ethers = require('ethers');
const { cyan, gray, green } = require('chalk');

function hexToNumber(hex) {
  return parseFloat(ethers.utils.formatEther(
    ethers.BigNumber.from(hex)
  ));
}

task('unicheck', 'Checks if an account/s can claim UNI rewards')
  .addPositionalParam('accounts', 'Comma separated list of accounts to check for UNI rewards to claim')