/* eslint-disable no-unused-vars */
'use strict';

const encryption = require('../../../../common/encryption');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'firstName one',
          lastName: 'lastName one',
          email: 'one@gmail.com',
          password: await encryption.hash('123456789'),
          lastLoginDate: '2021-01-01',
          id_company: 1,
          id_rol: 1,
        },
        {
          firstName: 'firstName two',
          lastName: 'lastName two',
          email: 'two@gmail.com',
          password: await encryption.hash('123456789'),
          lastLoginDate: '2021-02-02',
          id_company: 2,
          id_rol: 1,
        },
        {
          firstName: 'firstName three',
          lastName: 'lastName three',
          email: 'three@gmail.com',
          password: await encryption.hash('123456789'),
          lastLoginDate: '2021-03-03',
          id_company: 2,
          id_rol: 2,
        },
        {
          firstName: 'firstName four',
          lastName: 'lastName four',
          email: 'four@gmail.com',
          password: await encryption.hash('123456789'),
          lastLoginDate: '2021-04-04',
          id_company: 2,
          id_rol: 3,
        },
        {
          firstName: 'firstName five',
          lastName: 'lastName five',
          email: 'five@gmail.com',
          password: await encryption.hash('123456789'),
          lastLoginDate: '2021-05-05',
          id_company: 2,
          id_rol: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
