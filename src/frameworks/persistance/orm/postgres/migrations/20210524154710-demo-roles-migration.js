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

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('roles');
  },
};
