const messageService = require('../services/messagesService');

const errorObj = { code: 'something_wrong', message: 'Something went wrong' };

const createMessage = async (req, res, next) => {
  const { message, userId } = req.body;
  const { email, role, id } = req.user;
  try {
    const messageDB = await messageService.newMessage(message, userId, email, role, id);
    if (messageDB.error) return next({ code: messageDB.code, message: messageDB.message });
    return res.status(200).json(messageDB);
  } catch (error) {
    return next(errorObj);
  }
};

const getAllMessages = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') return next({ code: 'access_denied', message: 'Route for admin' });
    const messages = await messageService.getAllMessagesFromDb();
    return res.status(200).json({ messages });
  } catch (error) {
    return next(errorObj);
  }
};

const getMessages = async (req, res, next) => {
  const { id } = req.params;
  try {
    const messages = await messageService.getMessageFromId(id);
    return res.status(200).json({ messages });
  } catch (error) {
    return next(errorObj);
  }
};

module.exports = {
  createMessage,
  getMessages,
  getAllMessages,
};
