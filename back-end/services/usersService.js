const { User, Orders, OrderProducts } = require('../models');

const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getAllOrders = async () => {
  const orders = await Orders.findAll();
  return orders;
};

const getAllOrdersProducts = async () => {
  const orders = await OrderProducts.findAll();
  return orders;
};

const createUser = async (objUser) => User.create(objUser);

const changeUserName = async (name, email) => {
  console.log(name, email);
  User.update(
    { name },
    { where: { email } },
  );
};

const userOrders = async (id) =>
  Orders.findAll({ where: { id } });

module.exports = {
  getUsers,
  getAllOrders,
  getAllOrdersProducts,
  getUser,
  userOrders,
  createUser,
  changeUserName,
};
