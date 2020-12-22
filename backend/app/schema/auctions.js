const types = ``;

const queries = `
  auctions(connectedRealmId: ID): [Auction]
`;

module.exports = {
  schema: {
    types,
    queries,
  },
};
