const { Products, Orders, OrderProducts } = require('../models');

const getProducts = async () => {
  const products = await Products.findAll();
  return products.map(({ id, product_name: name, product_price: price, picture }) => (
    { productId: id, name, price, picture }));
};

const delivered = async (id, status) => {
  Orders.update(
    { delivered: status },
    { where: { id } },
  );
};

const newOrder = async (id, street, streetNumber, products) => Orders.create({
  client_id: id,
  street,
  street_number: streetNumber,
  createdAt: Date.now(),
  updatedAt: Date.now(),
  delivered: 'Pendente',
  total: products.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0),
});

const addProducts = async (products, dataValues) => {
  console.log(products, dataValues);
  Promise.all(products.forEach(({ id, quantity }) => OrderProducts.create({
    product_id: id,
    quantity,
    order_id: dataValues.id,
  })));
};

module.exports = {
  getProducts,
  delivered,
  newOrder,
  addProducts,
};
