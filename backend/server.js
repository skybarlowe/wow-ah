require('dotenv').config();
const app = require('./app');

const run = async () => {
  await app();
};

run();