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

const userOrders = async (number) => {
  const allOrders = await Orders.findAll({ where: { id: number }, attributes: ['id', 'total', 'createdAt'] });
  return allOrders.map(({ id, total, createdAt }) => ({
    orderId: id,
    total,
    day: createdAt.getDate(),
    month: createdAt.getMonth() + 1,
  }));
};

module.exports = {
  getUsers,
  getAllOrders,
  getAllOrdersProducts,
  getUser,
  userOrders,
  createUser,
  changeUserName,
};
