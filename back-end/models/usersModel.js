const { getAll, byEmail } = require('./Utils/getFromDB');
const { insertDb } = require('./Utils/insertDB');
const { queryDb } = require('./Utils/customQuery');

const getAllUsers = async (fields) => getAll('Users', fields);

const getByEmail = async (email, fields) => {
  const user = await byEmail(email, 'Users', fields);
  return user.length ? user[0].reduce((ac, cur, i) => ({ ...ac, [fields[i]]: cur }), {}) : false;
};

const createUserModel = async (fields, params) => insertDb('Users', fields, params);

const changeName = async (name, email) => {
  const query = 'UPDATE Users SET name = ? WHERE email = ?;';
  return queryDb(query, [name, email]);
};

const myOrders = async (id) => {
  const query = `SELECT O.order_id, DATE(AVG(O.order_date)), ROUND(SUM(quantity * product_price), 2)
  FROM Orders O
  INNER JOIN Order_Products OP ON OP.order_id = O.order_id
  INNER JOIN Products P ON P.product_id = OP.product_id
  WHERE O.client_id=?
  GROUP BY O.order_id;`;
  return queryDb(query, [id]);
};

const orderDetail = async (id, clientID) => {
  const query = `SELECT * FROM Orders O
    INNER JOIN Order_Products OP ON OP.order_id = O.order_id
    INNER JOIN Products P ON P.product_id = OP.product_id
    WHERE O.order_id=? AND client_id=?;`;
  return queryDb(query, [id, clientID]);
};

const allOrders = async () => {
  const query = `SELECT * FROM Orders O
  INNER JOIN Order_Products OP ON OP.order_id = O.order_id
  INNER JOIN Products P ON P.product_id = OP.product_id;`;
  return queryDb(query, []);
};

const getOrder = async (id) => {
  const query = `SELECT * FROM Orders O
  INNER JOIN Order_Products OP ON OP.order_id = O.order_id
  INNER JOIN Products P ON P.product_id = OP.product_id
  HAVING OP.order_id=?;`;
  return queryDb(query, [id]);
};

module.exports = {
  getAllUsers,
  getByEmail,
  createUserModel,
  changeName,
  myOrders,
  orderDetail,
  allOrders,
  getOrder,
};
