const { connection } = require('../connection');

const insertDb = async (table, fields, params) => {
  const db = await connection();
  const inserted = await db.getTable(table)
    .insert(fields)
    .values(...params).execute();
  return inserted.getAutoIncrementValue();
};

module.exports = {
  insertDb,
};
