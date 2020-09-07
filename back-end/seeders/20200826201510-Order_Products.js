module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('OrderProducts', [
      {
        id: 1,
        product_id: 1,
        quantity: 2,
        order_id: 1,
      },
      {
        id: 2,
        product_id: 1,
        quantity: 6,
        order_id: 2,
      },
      {
        id: 3,
        product_id: 1,
        quantity: 3,
        order_id: 3,
      },
      {
        id: 4,
        product_id: 3,
        quantity: 4,
        order_id: 1,
      },
      {
        id: 5,
        product_id: 4,
        quantity: 1,
        order_id: 1,
      },
      {
        id: 6,
        product_id: 5,
        quantity: 1,
        order_id: 2,
      },
      {
        id: 7,
        product_id: 5,
        quantity: 2,
        order_id: 3,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('OrderProducts', null, {}),
};
