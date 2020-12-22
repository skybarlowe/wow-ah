const types = `
  type Status {
    type: String
  }

  type Realm {
    id: ID
    name: Locales
    slug: String
  }

  type ConnectedRealm {
    id: ID
    status: Status
    realms: [Realm]
  }
`;

const queries = ``;

module.exports = {
  schema: {
    types,
    queries,
  },
};
