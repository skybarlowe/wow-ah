const types = ``;

const queries = `
  auctions(connectedRealmId: ID): [Auction] @cacheControl(maxAge: 3600)
`;

module.exports = {
  schema: {
    types,
    queries,
  },
};
