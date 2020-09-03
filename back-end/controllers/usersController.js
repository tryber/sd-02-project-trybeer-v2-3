const { getUsers, getAllOrders, createUser,
  changeUserName, userOrders, getOrderDetail, getOrderComplete } = require('../services/usersService');

const { validationFunc } = require('./utils/schemaValidator');

const getAllUsers = async (_req, res) => {
  const users = await getUsers();
  res.status(200).json({
    status: 'success',
    users,
  });
};

const register = async (req, _res, next) => {
  const { name, email, password, admin } = req.body;
  const { error, message } = validationFunc({
    name, email, password, admin,
  }, 'user');
  if (error) return next({ code: 'invalid_data', message });
  const role = admin ? 'admin' : 'client';
  try {
    await createUser({ name, email, password, role });

    return next();
  } catch (err) {
    next({ code: 'conflict', message: 'Usuário já cadastrado' });
  }
};

const changeName = async (req, res, next) => {
  const { name } = req.body;
  const { email } = req.user;
  const { error, message } = validationFunc({ name, email }, 'change_name');
  if (error) return next({ code: 'invalid_data', message });

  try {
    await changeUserName(name, email);

    return res.status(201).json({
      status: 'success',
    });
  } catch (err) {
    next({ code: 'not_found', message: 'Email not found' });
  }
};

const myOrders = async (req, res) => {
  const { id } = req.user;
  const orders = await userOrders(id);
  res.status(200).json({
    status: 'success',
    orders,
  });
};

const orderDetails = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const { id: userId } = req.user;
  const order = await getOrderDetail(id, userId);
  if (order.error) return next({ code: 'unauthorized', message: 'User not alowed' });

  return res.status(200).json({
    status: 'success',
    order,
  });
};

const allOrders = async (req, res, next) => {
  const { role } = req.user;
  if (role !== 'admin') return next({ code: 'unauthorized', message: 'User not alowed' });
  const orders = await getAllOrders();
  return res.status(200).json({
    status: 'success',
    orders,
  });
};

const adminOrderDetail = async (req, res, next) => {
  const { role } = req.user;
  const { id } = req.params;
  console.log(id);
  if (role !== 'admin') return next({ code: 'unauthorized', message: 'User not alowed' });
  const order = await getOrderComplete(id);
  if (order.error) return next({ code: 'not_found', message: 'Wrong ID' });

  return res.status(200).json({
    status: 'success',
    order,
  });
};

module.exports = {
  getAllUsers,
  register,
  changeName,
  myOrders,
  // getUser,
  orderDetails,
  allOrders,
  adminOrderDetail,
};
