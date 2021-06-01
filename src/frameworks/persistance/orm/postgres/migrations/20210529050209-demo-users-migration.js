/* eslint-disable no-unused-vars */
'use strict';

const { SCHEMAS } = require('../../../../../config/constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        firstName: {
          type: Sequelize.STRING(SCHEMAS.MAX_LENGTHS.FIRST_NAME),
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING(SCHEMAS.MAX_LENGTHS.LAST_NAME),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(SCHEMAS.MAX_LENGTHS.EMAIL),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(SCHEMAS.MAX_LENGTHS.PASSWORD),
          allowNull: false,
        },
        lastLoginDate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        id_company: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'companies',
            key: 'id',
          },
        },
        id_rol: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id',
          },
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
