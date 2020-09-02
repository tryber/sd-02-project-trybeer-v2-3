module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      product_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      product_price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      picture: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable('Products'),
};
