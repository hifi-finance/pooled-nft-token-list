# @pooled-nft/token-list

[![Tests](https://github.com/hifi-finance/pooled-nft-token-list/workflows/Tests/badge.svg)](https://github.com/hifi-finance/pooled-nft-token-list/actions?query=workflow%3ATests)

This GitHub repo contains the default token list used in the Pooled NFT interface, along with the source code and configuration files for managing and building the token list.

## Development

To start development, clone the repo and install the dependencies with Yarn.

```sh
git clone https://github.com/hifi-finance/pooled-nft-token-list.git
cd pooled-nft-token-list/
yarn install
```

The repo includes the following scripts:

- `test`: Runs the test suite using Mocha and Chai.
- `build`: Cleans the build directory, creates a new build directory, and generates the token list JSON file.

## Integration

To integrate the token list into your project, use the following API:

```
GET https://raw.githubusercontent.com/hifi-finance/pooled-nft-token-list/main/build/pooled-nft.tokenlist.json
```

## Adding a token

To request that we add a token to the list,
[file an issue](https://github.com/hifi-finance/pooled-nft-token-list/issues/new?assignees=&labels=token+request&template=token-request.md&title=Add+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D).

### Disclaimer

Note filing an issue does not guarantee addition to this default token list.
We do not review token addition requests in any particular order, and we do not
guarantee that we will review your request to add the token to the default list.

