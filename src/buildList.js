const { version } = require("../package.json");
const tokenList = require("./token-list.json");

module.exports = async function buildList() {
  const parsed = version.split(".");
  const list = {
    name: "Pooled NFT",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "ipfs://QmQx8jsipAFzkhrqjLn7yVzSm4AT6wyToV1DHNPeikHp94",
    keywords: ["pooled nft", "pooled", "nft"],
    tokens: [...tokenList]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
      }),
  };
  return list;
};
