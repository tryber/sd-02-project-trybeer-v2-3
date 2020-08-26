const OrdersModel = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    OrderId: DataTypes.INTEGER,
    delivered: DataTypes.STRING,
    street: DataTypes.STRING,
    street_number: DataTypes.STRING,
    client_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  return Orders;
};

module.exports = OrdersModel;
