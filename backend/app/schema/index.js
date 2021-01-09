const { gql } = require('apollo-server-express');
const BlizzardAPI = require('../BlizzzardAPI');

const auctions = require('./auctions');
const auction = require('./auction');
const item = require('./item');
const locales = require('./locales');
const realms = require('./realms');
const realm = require('./realm');

const types = [];
const queries = [];

const schemas = [
  auction.schema,
  auctions.schema,
  item.schema,
  locales.schema,
  realms.schema,
  realm.schema,
];

schemas.forEach((s) => {
  types.push(s.types);
  queries.push(s.queries);
});

const schema = `
  ${types.join('\n')}

  type Query {
    ${queries.join('\n')}
  }
`;

const typeDefs = gql(schema);

const resolvers = {
  Query: {
    auctions: async (_, { connectedRealmId }, { dataSources }) => {
      return dataSources.blizzardAPI
        .getAuctions({ connectedRealmId })
        .then(({ auctions }) => auctions);
    },
    item: async (_, { itemId }, { dataSources }) => {
      return dataSources.blizzardAPI.getItem({ itemId });
    },
    realms: async (_, __, { dataSources }) => {
      return dataSources.blizzardAPI.getRealms().then(({ results }) => results);
    },
  },
};

const dataSources = () => ({
  blizzardAPI: new BlizzardAPI(),
});

module.exports = {
  typeDefs,
  resolvers,
  dataSources,
};
