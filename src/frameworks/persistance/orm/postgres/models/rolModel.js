/* eslint-disable no-magic-numbers */
'use strict';

const { SCHEMAS } = require('../../../../../config/constants');

module.exports = (dependencies) => {
  const { sequelize, type } = dependencies;

  return sequelize.define(
    'roles',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      rolName: {
        type: type.STRING(SCHEMAS.MAX_LENGTHS.ROL_NAME),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
