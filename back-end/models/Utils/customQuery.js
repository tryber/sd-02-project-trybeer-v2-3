const { getSession } = require('../connection');

const queryDb = async (query, params) => {
  const db = await getSession();
  const sessions = db.sql(query);
  params.forEach((param) => sessions.bind(param));
  const results = await sessions.execute();
  return results.fetchAll();
};

module.exports = {
  queryDb,
};
