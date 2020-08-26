module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('Orders', [
      {
        delivered: 'Pendente',
        street: 'Rua 1',
        street_number: 22,
        client_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        delivered: 'Preparando',
        street: 'Rua 2',
        street_number: 820,
        client_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        delivered: 'Entregue',
        street: 'Rua 3',
        street_number: 52,
        client_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Orders', null, {}),
};
