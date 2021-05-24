'use strict';

const { SCHEMAS } = require('../../../../../config/constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'companies',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        legalName: {
          type: Sequelize.STRING(SCHEMAS.MAX_LENGTHS.LEGAL_NAME),
          allowNull: false,
        },
        comercialName: {
          type: Sequelize.STRING(SCHEMAS.MAX_LENGTHS.COMERCIAL_NAME),
          allowNull: false,
          defaultValue: SCHEMAS.DEFAULT_VALUES.COMERCIAL_NAME,
        },
        rfc: {
          type: Sequelize.STRING(SCHEMAS.MAX_LENGTHS.RFC),
          unique: true,
          allowNull: false,
        },
        telephone: {
          type: Sequelize.STRING(SCHEMAS.MAX_LENGTHS.TELEPHONE),
          allowNull: false,
        },
        registeredDate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          defaultValue: new Date(),
        },
      },
      {
        timestamps: false,
      }
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('companies');
  },
};
