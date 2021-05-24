/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('companies', [
      {
        legalName: 'first legal name company',
        comercialName: 'fist comercial name company',
        rfc: '0123456789QWE',
        telephone: '123-123-1212',
        registeredDate: '2021-05-01',
      },
      {
        legalName: 'second legal name company',
        comercialName: 'second comercial name company',
        rfc: '0123456789ASD',
        telephone: '456-456-4545',
        registeredDate: '2021-05-02',
      },
      {
        legalName: 'third legal name company',
        comercialName: 'third comercial name company',
        rfc: '0123456789ZXC',
        telephone: '789-789-7878',
        registeredDate: '2021-05-03',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('companies', null, {});
  },
};
