const ProductsModel = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    product_name: DataTypes.STRING,
    product_price: DataTypes.FLOAT,
    picture: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  return Products;
};

module.exports = ProductsModel;
