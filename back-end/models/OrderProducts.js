const OrderProducts = (sequelize, DataTypes) => {
  const orderProducts = sequelize.define('Order_Products', {
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
  });
  return orderProducts;
};

module.exports = OrderProducts;
