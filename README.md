# ERC20 token-distribution

This repo contains my research and implementation of how Uniswap technically solved its UNI (an ERC20) token distribution.
It contains a script that can be used to check if an address or list of addresses can claim an erc20.

## Running the script

```
git clone https://github.com/david0x1/token-distribution

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

Note: The script uses Ethers' default provider, but you can specify your own in a .env file. See .env.sample.

If the address list is just a ',' (comma) it will check all addresses in the Merkle tree.
