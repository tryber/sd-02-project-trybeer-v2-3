const { getAllProducts, createNewOrder, addToOrder,
  markDelivered } = require('../models/productsModel');

const allFields = ['product_id', 'product_name', 'product_price', 'picture'];
const newOrderFields = ['delivered', 'street', 'street_number', 'order_date', 'client_id'];
const addProductsFields = ['product_id', 'quantity', 'order_id'];

const getProducts = async () => getAllProducts(allFields);

const newOrder = async (id, street, streetNumber) => {
  const date = new Date();
  const yyyymmdd = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
  const params = [0, street, streetNumber, yyyymmdd, id];
  return createNewOrder(newOrderFields, params);
};

const addProducts = async (products, orderID) => {
  Promise.all(products.map(({ id, quantity }) => {
    const params = [id, quantity, orderID];
    return addToOrder(addProductsFields, params);
  }));
};

const delivered = async (id) => markDelivered(id);

module.exports = {
  getProducts,
  newOrder,
  addProducts,
  addToOrder,
  delivered,
};
