const OrderProducts = (sequelize, DataTypes) => {
  const orderProducts = sequelize.define('Order_Products', {
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
  });

  orderProducts.associate = (models) => {
    orderProducts.belongsToMany(models.Orders, {
      as: 'orders',
      foreignKey: 'id',
      through: 'ordersProducts',
    });
    orderProducts.belongsToMany(models.Products, {
      as: 'products',
      foreignKey: 'id',
      through: 'ordersProducts',
    });
  };

  return orderProducts;
};
module.exports = OrderProducts;
