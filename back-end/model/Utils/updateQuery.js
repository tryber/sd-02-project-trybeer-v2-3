const { connection } = require('../connection');

const updateDb = async (table, field, value) => {
  const db = await connection();
  await db.getTable(table)
    .update(field)
    .values(value)
    .where()
    .execute();
};

module.exports = {
  updateDb,
};
