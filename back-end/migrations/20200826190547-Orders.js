module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('Orders', {
      order_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      delivered: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      order_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      client_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable('Orders'),
};
