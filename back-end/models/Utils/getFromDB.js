const { connection } = require('../connection');

const byEmail = async (email, table, arraySelection) => {
  const db = await connection();
  const results = await db.getTable(table)
    .select(arraySelection)
    .where('email = :email')
    .bind('email', email)
    .execute();
  return results.fetchAll();
};

const getAll = async (table, arraySelection) => {
  const db = await connection();
  const results = await db.getTable(table)
    .select(arraySelection)
    .execute();
  return results.fetchAll();
};

module.exports = {
  byEmail,
  getAll,
};
