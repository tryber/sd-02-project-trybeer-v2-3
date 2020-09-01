const express = require('express');

// const {   changeName, myOrders,   getUser, } = require('../controllers/usersController');

const { getAllUsers, register, changeName } = require('../controllers/usersController');

const { login, authUser } = require('../controllers/authenticatorController');

const router = express.Router();

// router
//   .route('/')
//   .get(authUser, getUser);

router
  .route('/users')
  .get(getAllUsers);

router
  .route('/login')
  .post(login);

router
  .route('/register')
  .post(register, login);

router
  .route('/profile')
  .patch(authUser, changeName);

// router
//   .route('/orders')
//   .get(authUser, myOrders);

module.exports = router;
