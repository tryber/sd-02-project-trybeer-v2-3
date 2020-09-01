const OrderProductsModel = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  OrderProducts.associate = (models) => {
    OrderProducts.belongsToMany(models.Orders, {
      as: 'orders',
      foreignKey: 'id',
      through: 'ordersProducts',
    });
    OrderProducts.belongsToMany(models.Products, {
      as: 'products',
      foreignKey: 'id',
      through: 'ordersProducts',
    });
  };

  return OrderProducts;
};
module.exports = OrderProductsModel;
