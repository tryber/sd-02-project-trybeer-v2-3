const { getAll } = require('./Utils/getFromDB');
const { insertDb } = require('./Utils/insertDB');
const { queryDb } = require('./Utils/customQuery');

const getAllProducts = async (fields) => {
  const products = await getAll('Products', fields);
  return products.map(([productId, name, price, picture]) => ({ name, productId, price, picture }));
};

const createNewOrder = async (newOrderFields, params) => insertDb('Orders', newOrderFields, params);

const addToOrder = async (fields, params) => insertDb('Order_Products', fields, params);

const markDelivered = async (id) => {
  const query = 'UPDATE Orders SET delivered = true WHERE order_id=?;';
  return queryDb(query, [id]);
};

module.exports = {
  getAllProducts,
  createNewOrder,
  addToOrder,
  markDelivered,
};
