module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('Users', [
      {
        id: 1,
        email: 'tryber@tryber.com',
        password: '123456',
        name: 'tryber',
        role: 'admin',
      },
      {
        id: 2,
        email: 'miguelito@miguel.com',
        password: '654321',
        name: 'Miguel, O Miguelito',
        role: 'client',
      },
      {
        id: 3,
        email: 'folgado@gmail.com',
        password: '123456',
        name: 'Folgado',
        role: 'client',
      },
      {
        id: 4,
        email: 'pedro@gmail.com',
        password: '123456',
        name: 'Pedro',
        role: 'client',
      },
      {
        id: 5,
        email: 'roz@wpp.com',
        password: '123456',
        name: 'Roz',
        role: 'admin',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
