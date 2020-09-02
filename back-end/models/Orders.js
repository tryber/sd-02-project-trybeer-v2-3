const OrdersModel = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    delivered: DataTypes.STRING,
    street: DataTypes.STRING,
    street_number: DataTypes.STRING,
    client_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    total: DataTypes.FLOAT,
  });

  Orders.associate = (models) => {
    Orders.belongsTo(models.User, { as: 'user', foreignKey: 'id' });
    Orders.belongsToMany(models.Products, {
      through: 'OrderProducts',
      as: 'products',
      foreignKey: 'id',
    });
  };

  return Orders;
};

module.exports = OrdersModel;
