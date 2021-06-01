/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('companies', [
      {
        legalName: 'legalName company one',
        comercialName: 'comercialName company one',
        rfc: '0123456789QWE',
        telephone: '123-123-1212',
        registeredDate: '2020-01-01',
      },
      {
        legalName: 'legalName company two',
        comercialName: 'comercialName company two',
        rfc: '0123456789ASD',
        telephone: '456-456-4545',
        registeredDate: '2020-02-02',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('companies', null, {});
  },
};
