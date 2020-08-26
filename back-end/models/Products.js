const ProductsModel = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    product_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    product_price: DataTypes.FLOAT,
    picture: DataTypes.STRING,
  });
  return Products;
};

module.exports = ProductsModel;
