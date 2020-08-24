const messageService = require('../services/messagesService');

const createMessage = async (req, res, next) => {
  const { message, userId } = req.body;
  const { email, role } = req.user;
  const messageDB = await messageService.newMessage(message, userId, email, role);
  if (messageDB.error) return next({ code: messageDB.code, message: messageDB.message });
  return res.status(200).json({ status: 'success' });
};

module.exports = {
  createMessage,
};
