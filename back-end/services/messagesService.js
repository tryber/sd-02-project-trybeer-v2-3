const messagesModel = require('../models/messagesModel');

const newMessage = async (message, userId, email, role) => {
  if (!message || (role === 'admin' && !userId)) {
    return { error: true, message: 'Missing fields', code: 'invalid_data' };
  }
  const emailSave = role === 'admin' ? 'retorno do model getByID(userId)' : email;
  try {
    await messagesModel.saveDb(emailSave, message, email === emailSave);
    return { error: false };
  } catch (error) {
    return { error: true, message: 'Something went wrong', code: 'something_wrong' };
  }
};

module.exports = {
  newMessage,
};
