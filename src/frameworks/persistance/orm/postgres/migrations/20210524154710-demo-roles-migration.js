/* eslint-disable no-unused-vars */
'use strict';

const { SCHEMAS } = require('../../../../../config/constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'roles',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        rolName: {
          type: Sequelize.STRING(SCHEMAS.MAX_LENGTHS.ROL_NAME),
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('roles');
  },
};
