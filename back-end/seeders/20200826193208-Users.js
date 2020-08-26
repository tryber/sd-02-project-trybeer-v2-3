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
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
