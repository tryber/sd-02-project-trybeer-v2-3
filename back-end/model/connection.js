const mysqlx = require('@mysql/xdevapi');

const getSession = () => (
  mysqlx.getSession({
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    host: 'localhost',
    port: 33060,
    schema: process.env.DATABASE_SCHEMA,
  }));

const connection = () => getSession()
  .then((session) => session.getSchema(process.env.DATABASE_SCHEMA));

module.exports = {
  getSession,
  connection,
};
