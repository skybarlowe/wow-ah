const types = `
  type RealmData {
    data: ConnectedRealm
  }
`;

const queries = `
  realms: [RealmData] @cacheControl(maxAge: 86400)
`;

module.exports = {
  schema: {
    types,
    queries,
  },
};