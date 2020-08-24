const { connectionMongoDb } = require('./connection');

const saveDb = async (email, message, fromClient) => {
  const db = await connectionMongoDb();
  await db.collection('chatMessages').updateOne(
    { email },
    {
      $push: {
        messages: { fromClient, content: message, timestamp: Date.now() },
      },
    },
    { upsert: true },
  );
};

module.exports = {
  saveDb,
};
