const { connectionMongoDb } = require('./connection');
const userModelFake = require('./userModelFake');

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

const getAllMessages = async () => {
  const db = await connectionMongoDb();
  return db.collection('chatMessages').find().toArray();
};

const getMessagesFromId = async (id) => {
  const db = await connectionMongoDb();
  const email = (await userModelFake.getById(id))[0][3];
  return db.collection('chatMessages').find({ email }).toArray();
};

module.exports = {
  saveDb,
  getAllMessages,
  getMessagesFromId,
};
