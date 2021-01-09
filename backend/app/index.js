const { ApolloServer } = require('apollo-server-express');
const OAuthClient = require('./OAuthClient');
const express = require('express');
const chalk = require('chalk');
const { typeDefs, resolvers, dataSources } = require('./schema');
const { REGIONS } = require('./constants');

const oauthClient = new OAuthClient({
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  },
  auth: {
    tokenHost: process.env.REGION
      ? `https://${process.env.REGION}.battle.net`
      : 'https://us.battle.net',
  },
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: () => ({
    token: oauthClient.getToken(),
    region: process.env.REGION || REGIONS.EU,
  }),
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(chalk.cyan(`Server ready at http://localhost:4000`));
});

module.exports = async () => {
  await oauthClient.getToken();
  return app;
};
