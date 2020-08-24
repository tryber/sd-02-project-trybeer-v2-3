const mysqlx = require('@mysql/xdevapi');
const mongoClient = require('mongodb').MongoClient;

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

const connectionMongoDb = () => (mongoClient
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(process.env.DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  }));

module.exports = {
  getSession,
  connection,
  connectionMongoDb,
};
