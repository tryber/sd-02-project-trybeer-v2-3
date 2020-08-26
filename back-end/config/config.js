require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    database: 'TrybeerII',
    password: process.env.PASSWORD,
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
