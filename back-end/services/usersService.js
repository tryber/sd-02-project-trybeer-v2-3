const { User, Orders, OrderProducts, Products } = require('../models');

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

const createUser = async (objUser) => User.create(objUser);

const changeUserName = async (name, email) => {
  console.log(name, email);
  User.update(
    { name },
    { where: { email } },
  );
};

const userOrders = async (number) => {
  const allOrders = await Orders.findAll({ where: { client_id: number }, attributes: ['id', 'total', 'createdAt'] });
  return allOrders.map(({ id, total, createdAt }) => ({
    orderId: id,
    total,
    day: createdAt.getDate(),
    month: createdAt.getMonth() + 1,
  }));
};

const getTheOrder = async (orderId) => {
  const orderDetail = await OrderProducts.findAll({
    where: { order_id: orderId },
    raw: true,
    include: [{
      model: Products,
      required: true,
      as: 'products',
      attributes: ['product_name', 'product_price'],
    }],
  }).then((allOrders) =>
    allOrders
      .map((order) => ({
        name: order['products.product_name'],
        qty: order.quantity,
        price: order['products.product_price'],
        total: order['products.product_price'] * order.quantity,
      })));
  const { dataValues } = await Orders.findOne({
    where: { id: orderId },
    attributes: ['createdAt', 'delivered', 'street', 'street_number'],
  });

  return { orderDetail, dataValues };
};

const getOrderDetail = async (orderId) => {
  const { orderDetail, dataValues } = await getTheOrder(orderId);
  const newDate = {
    orderId,
    day: dataValues.createdAt.getDate(),
    month: dataValues.createdAt.getMonth() + 1,
  };

  return { ...newDate, products: orderDetail };
};

const getOrderComplete = async (orderId) => {
  const { orderDetail, dataValues } = await getTheOrder(orderId);
  const newDate = {
    orderId,
    day: dataValues.createdAt.getDate(),
    month: dataValues.createdAt.getMonth() + 1,
    address: `${dataValues.street}, ${dataValues.street_number}`,
    delivered: dataValues.delivered,
    total: orderDetail.reduce((acc, cur) => acc + cur.total, 0),
  };
  console.log(orderDetail);
  return { ...newDate, products: orderDetail };
};

module.exports = {
  changeUserName,
  getOrderDetail,
  getAllOrders,
  createUser,
  userOrders,
  getUsers,
  getUser,
  getOrderComplete,
};
