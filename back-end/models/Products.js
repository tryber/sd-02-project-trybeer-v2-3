const ProductsModel = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    product_name: DataTypes.STRING,
    product_price: DataTypes.FLOAT,
    picture: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  Products.associate = (models) => {
    Products.belongsToMany(models.Orders, {
      as: 'orders',
      foreignKey: 'id',
      through: 'OrderProducts',
    });
  };

  return Products;
};

module.exports = ProductsModel;
