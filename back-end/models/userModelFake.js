const { connection } = require('./connection');

const getById = async (id) => {
  const db = await connection();
  const results = await db.getTable('Users')
    .select(['name', 'password', 'id', 'email', 'role'])
    .where('id = :id')
    .bind('id', id)
    .execute();
  return results.fetchAll();
};

module.exports = {
  getById,
};
