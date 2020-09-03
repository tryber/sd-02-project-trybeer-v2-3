const { connectionMongoDb } = require('./connection');
const { User } = require('..');

const saveDb = async (email, message, fromClient, userId, id) => {
  const adjustedId = userId || id;
  const db = await connectionMongoDb();
  return db.collection('chatMessages').findOneAndUpdate(
    { email },
    {
      $push: {
        messages: { fromClient, content: message, timestamp: Date.now(), id: adjustedId },
      },
    },
    { upsert: true, new: true, returnOriginal: false },
  );
};

const getAllMessages = async () => {
  const db = await connectionMongoDb();
  return db
    .collection('chatMessages')
    .aggregate([
      { $unwind: '$messages' },
      { $sort: { 'messages.timestamp': -1 } },
      { $group: { _id: '$email', messages: { $push: '$messages' } } },
    ])
    .toArray();
};

const getMessagesFromId = async (id) => {
  const db = await connectionMongoDb();
  const { dataValues: { email } } = await User.findByPk(id);
  return db.collection('chatMessages').find({ email }).toArray();
};

module.exports = {
  saveDb,
  getAllMessages,
  getMessagesFromId,
};
