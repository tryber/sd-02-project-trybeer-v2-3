module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('Users', [
      {
        email: 'tryber@tryber.com',
        password: '123456',
        name: 'tryber',
        role: 'admin',
      },
      {
        email: 'miguelito@miguel.com',
        password: '654321',
        name: 'Miguel, O Miguelito',
        role: 'client',
      },
      {
        email: 'folgado@gmail.com',
        password: '123456',
        name: 'Folgado',
        role: 'client',
      },
      {
        email: 'pedro@gmail.com',
        password: '123456',
        name: 'Pedro',
        role: 'client',
      },
      {
        email: 'roz@wpp.com',
        password: '123456',
        name: 'Roz',
        role: 'admin',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
