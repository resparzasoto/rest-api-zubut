/* eslint-disable no-magic-numbers */
'use strict';

const { SCHEMAS } = require('../../../../../config/constants');

module.exports = (dependencies) => {
  const { sequelize, type } = dependencies;

  return sequelize.define(
    'company',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      legalName: {
        type: type.STRING(SCHEMAS.MAX_LENGTHS.LEGAL_NAME),
        allowNull: false,
      },
      comercialName: {
        type: type.STRING(SCHEMAS.MAX_LENGTHS.COMERCIAL_NAME),
        allowNull: false,
        defaultValue: SCHEMAS.DEFAULT_VALUES.COMERCIAL_NAME,
      },
      rfc: {
        type: type.STRING(SCHEMAS.MAX_LENGTHS.RFC),
        unique: true,
        allowNull: false,
      },
      telephone: {
        type: type.STRING(SCHEMAS.MAX_LENGTHS.TELEPHONE),
        allowNull: false,
      },
      registeredDate: {
        type: type.DATEONLY,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      timestamps: false,
    }
  );
};
