# ERC20 token-distribution

This repo contains my research and implementation of how Uniswap technically solved its UNI (an ERC20) token distribution.
It contains a script that can be used to check if an address or list of addresses can claim an erc20.

## Running the script

```
git clone https://github.com/chefking/token-distribution

cd token-distribution

yarn
```

The script requires a data file containing the list of addresses that can claim UNI (and their Merkle proofs). This file is ~360mb, so it needs to be downloaded first. Check merkle/data.sample.json to see what it looks like.

```
curl -X GET "https://ipfs.io/ipfs/Qmegj6pV3qvGE8XWfMPdzXCu2sUoNMGtpbL5vYuAkhnJja" > data.json
```

Then run the script.

```
npx hardhat unicheck <address-list>
```
