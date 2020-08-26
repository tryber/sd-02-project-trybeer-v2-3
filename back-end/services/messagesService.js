const messagesModel = require('../models/messagesModel');
const userModelFake = require('../models/userModelFake');

const newMessage = async (message, userId, email, role, id) => {
  if (!message || (role === 'admin' && !userId)) {
    return { error: true, message: 'Missing fields', code: 'invalid_data' };
  }
  const emailSave = role === 'admin' ? (await userModelFake.getById(userId))[0][3] : email;
  await messagesModel.saveDb(emailSave, message, email === emailSave, userId, id);
  return { error: false };
};

const getAllMessagesFromDb = async () => messagesModel.getAllMessages();

const getMessageFromId = async (id) => messagesModel.getMessagesFromId(id);

module.exports = {
  newMessage,
  getAllMessagesFromDb,
  getMessageFromId,
};
