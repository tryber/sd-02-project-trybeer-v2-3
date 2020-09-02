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

const getOrderDetail = async (orderId) => {
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

  const { dataValues: { createdAt } } = await Orders.findOne({
    where: { id: orderId },
    attributes: ['createdAt'],
  });
  const newDate = {
    orderId,
    day: createdAt.getDate(),
    month: createdAt.getMonth() + 1,
  };

  return { ...newDate, products: orderDetail };
};

module.exports = {
  getAllOrdersProducts,
  changeUserName,
  getOrderDetail,
  getAllOrders,
  createUser,
  userOrders,
  getUsers,
  getUser,
};
