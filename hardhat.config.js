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
  .setAction(async (taskArguments) => {
    const providerUrl = process.env.PROVIDER;
    const provider = providerUrl ?
      new ethers.providers.JsonRpcProvider(providerUrl) :
      ethers.getDefaultProvider();

      let accounts = taskArguments.accounts;
      if (accounts === ',') {
        accounts = Object.keys(data.claims).join(',');
      }

      accounts = accounts.split(',');
      console.log(gray(`  > Checking ${accounts.length} accounts...`));
      console.log(gray(`  > Using provider: ${providerUrl ? providerUrl : 'Ethers fallback provider'}`));
      console.log('\n');
      