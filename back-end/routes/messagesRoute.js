const express = require('express');
const messageController = require('../controllers/messageController');
const authController = require('../controllers/authenticatorController');

const router = express.Router();

router
  .route('/')
  .post(authController.authUser, messageController.createMessage);

router
  .route('/')
  .get(authController.authUser, messageController.getAllMessages);

router
  .route('/:id')
  .get(authController.authUser, messageController.getMessages);

module.exports = router;
