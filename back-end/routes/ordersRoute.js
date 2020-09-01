const express = require('express');
// const { adminOrderDetail, orderDetails, allOrders } = require('../controllers/usersController');
const { allOrders, allOrdersProducts } = require('../controllers/usersController');
// const { markAsDelivered, createOrder } = require('../controllers/productsController');
// const { authUser } = require('../controllers/authenticatorController');

const router = express.Router();

// router
//   .route('/')
//   .post(authUser, createOrder);

router
  .route('/admin')
  .get(allOrders);

router
  .route('/admin/detailed')
  .get(allOrdersProducts);

// router
//   .route('/admin/:id')
//   .get(authUser, adminOrderDetail);

// router
//   .route('/admin/:id/delivered')
//   .patch(authUser, markAsDelivered);

// router
//   .route('/:id')
//   .get(authUser, orderDetails);

module.exports = router;
