const { getAllUsers, getByEmail, createUserModel, changeName, getOrder,
  myOrders, orderDetail, allOrders } = require('../models/usersModel');

const { adjustOrders, adjustOrder, groupByID } = require('./utils/adjustOrders');

const allFields = ['name', 'password', 'id', 'email', 'role'];
const normalFields = ['name', 'email', 'password', 'role'];

const getUsers = async () => getAllUsers(allFields);

const getUser = async (email) => getByEmail(email, allFields);

const createUser = async (name, email, password, admin) => {
  const hasUser = await getByEmail(email, allFields);
  if (hasUser.name) return { error: true, message: 'User already exists' };
  const role = admin ? 'admin' : 'client';
  const params = [name, email, password, role];
  await createUserModel(normalFields, params);
  return getByEmail(email, allFields);
};

const changeUserName = async (name, email) => {
  const hasUser = await getByEmail(email, allFields);
  if (!hasUser.name) return { error: true };
  await changeName(name, email);
  return {};
};

const getOrders = async (id) => {
  const completeOrders = await myOrders(id);
  return adjustOrders(completeOrders)
    .map(({ orderId, day, month, total }) => ({ orderId, day, month, total }));
};

const getOrderDetail = async (id, clientID) => {
  const order = await orderDetail(id, clientID);
  if (!order.length) return { error: true };
  const { deliver, ...orderDetailed } = adjustOrder(order);
  return orderDetailed;
};

const getAllOrders = async () => {
  const ordersAdmin = await allOrders();
  return groupByID(ordersAdmin);
};

const getOrderComplete = async (id) => {
  const order = await getOrder(id);
  if (!order.length) return { error: true };
  return groupByID(order);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  changeUserName,
  getOrders,
  getOrderDetail,
  getAllOrders,
  getOrderComplete,
};
