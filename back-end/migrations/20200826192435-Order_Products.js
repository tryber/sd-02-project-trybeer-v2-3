module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('Order_Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'product_id',
        },
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      order_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'order_id',
        },
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable('Order_Products'),
};
