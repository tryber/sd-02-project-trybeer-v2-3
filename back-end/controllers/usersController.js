const { getUsers, createUser, changeUserName, getOrders, getAllOrders, getOrderComplete,
  getOrderDetail } = require('../services/usersService');
const { validationFunc } = require('./utils/schemaValidator');

const getAllUsers = async (_req, res) => {
  const users = await getUsers();
  res.status(200).json({
    status: 'success',
    users,
  });
};

const getUser = async (req, res) => {
  const { name, email } = req.user;
  res.status(200).json({
    status: 'success',
    name,
    email,
  });
};

const register = async (req, res, next) => {
  const { name, email, password, admin } = req.body;
  const { error, message } = validationFunc({ name, email, password, admin }, 'user');
  if (error) return next({ code: 'invalid_data', message });

  const user = await createUser(name, email, password, admin);
  if (user.error) return next({ code: 'conflict', message: user.message });

  return next();
};

const changeName = async (req, res, next) => {
  const { name } = req.body;
  const { email } = req.user;
  const { error, message } = validationFunc({ name, email }, 'change_name');
  if (error) return next({ code: 'invalid_data', message });

  const user = await changeUserName(name, email);
  if (user.error) return next({ code: 'not_found', message: 'Email not found' });

  res.status(201).json({
    status: 'success',
  });
};

const myOrders = async (req, res) => {
  const { id } = req.user;
  const orders = await getOrders(id);
  res.status(200).json({
    status: 'success',
    orders,
  });
};

const orderDetails = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const order = await getOrderDetail(id, userId);
  if (order.error) return next({ code: 'unauthorized', message: 'User not alowed' });

  res.status(200).json({
    status: 'success',
    order,
  });
};

const allOrders = async (req, res, next) => {
  const { role } = req.user;
  if (role !== 'admin') return next({ code: 'unauthorized', message: 'User not alowed' });
  const orders = await getAllOrders();
  res.status(200).json({
    status: 'success',
    orders,
  });
};

const adminOrderDetail = async (req, res, next) => {
  const { role } = req.user;
  const { id } = req.params;
  if (role !== 'admin') return next({ code: 'unauthorized', message: 'User not alowed' });
  const order = await getOrderComplete(id);
  if (order.error) return next({ code: 'not_found', message: 'Wrong ID' });

  res.status(200).json({
    status: 'success',
    order,
  });
};

module.exports = {
  getAllUsers,
  register,
  changeName,
  myOrders,
  getUser,
  orderDetails,
  allOrders,
  adminOrderDetail,
};
