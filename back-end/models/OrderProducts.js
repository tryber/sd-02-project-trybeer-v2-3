const OrderProductsModel = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  OrderProducts.associate = (models) => {
    OrderProducts.belongsTo(models.Orders, {
      as: 'orders',
      foreignKey: 'id',
      through: 'OrderProducts',
    });
    OrderProducts.belongsTo(models.Products, {
      as: 'products',
      foreignKey: 'id',
      through: 'OrderProducts',
    });
  };

  return OrderProducts;
};
module.exports = OrderProductsModel;
