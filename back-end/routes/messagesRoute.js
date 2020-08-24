const express = require('express');
const messageController = require('../controllers/messageController');
const authController = require('../controllers/authenticatorController');

const router = express.Router();

router
  .route('/')
  .post(authController.authUser, messageController.createMessage);

module.exports = router;
