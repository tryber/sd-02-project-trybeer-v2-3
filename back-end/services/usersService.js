const { User, Orders, OrderProducts } = require('../models');

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getAllOrders = async () => {
  const orders = await Orders.findAll();
  return orders;
};

const getAllOrdersProducts = async () => {
  const orders = await OrderProducts.findAll();
  return orders;
};

module.exports = {
  getUsers,
  getAllOrders,
  getAllOrdersProducts,
};
