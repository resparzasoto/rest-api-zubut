'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'roles',
      [
        {
          rolName: 'admin',
        },
        {
          rolName: 'manager',
        },
        {
          rolName: 'accounting',
        },
        {
          rolName: 'employee',
        },
      ],
      {}
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null, {});
  },
};
