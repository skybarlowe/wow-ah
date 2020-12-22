const types = `
  type RealmData {
    data: ConnectedRealm
  }
`;

const queries = `
  realms: [RealmData]
`;

module.exports = {
  schema: {
    types,
    queries,
  },
};