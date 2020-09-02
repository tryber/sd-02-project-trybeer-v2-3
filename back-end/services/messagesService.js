const messagesModel = require('../models/utils/messagesModel');
const userModelFake = require('../models/utils/userModelFake');

const newMessage = async (message, userId, email, role, id) => {
  if (!message || (role === 'admin' && !userId)) {
    return { error: true, message: 'Missing fields', code: 'invalid_data' };
  }
  const emailSave = role === 'admin' ? (await userModelFake.getById(userId))[0][3] : email;
  const messages = await messagesModel.saveDb(emailSave, message, email === emailSave, userId, id);
  return messages;
};

const getAllMessagesFromDb = async () => messagesModel.getAllMessages();

const getMessageFromId = async (id) => messagesModel.getMessagesFromId(id);

module.exports = {
  newMessage,
  getAllMessagesFromDb,
  getMessageFromId,
};
