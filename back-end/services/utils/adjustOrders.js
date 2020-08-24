const _ = require('lodash');
const months = require('./months');

const adjustOrders = (orders) => orders
  .map(([orderId, date, total, deliver]) => ({ orderId, date, total, deliver }))
  .map(({ orderId, date, total, deliver }) => (
    {
      orderId,
      total,
      day: date.toUTCString().split(' ')[1],
      month: months[date.toUTCString().split(' ')[2]],
      deliver,
    }
  ));

const reduceOrder = (prev, { orderId, date, name, price, qty, deliver, adress }) => ({
  orderId,
  adress,
  day: new Date(date).getUTCDate(),
  month: new Date(date).getUTCMonth() + 1,
  products: [...prev.products, { name, qty, price, total: qty * price }],
  total: prev.total + (qty * price),
  deliver,
});

const adjustOrder = (order) => order
  .map(([orderId, deliver, , , date, , , , qty, , , name, price]) => ({
    orderId, date, qty, name, price, deliver,
  }))
  .reduce(reduceOrder, { products: [], total: 0 });

const groupByID = (order) => {
  const orderDetailed = order
    .map(([orderId, deliver, street, streetNumber, date, , , , qty, , , name, price]) => ({
      orderId, date, adress: `${street}, ${streetNumber}`, qty, name, price, deliver,
    }));
  const ordersID = Object.keys(_.groupBy(orderDetailed, 'orderId'));
  return ordersID.map((id) => _.groupBy(orderDetailed, 'orderId')[id]
    .reduce(reduceOrder, { products: [], total: 0 }));
};

module.exports = {
  adjustOrders,
  reduceOrder,
  adjustOrder,
  groupByID,
};
