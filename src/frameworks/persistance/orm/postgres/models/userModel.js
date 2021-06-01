/* eslint-disable no-magic-numbers */
'use strict';

const { SCHEMAS } = require('../../../../../config/constants');

module.exports = (dependencies) => {
  const { sequelize, type } = dependencies;

  return sequelize.define(
    'users',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      firstName: {
        type: type.STRING(SCHEMAS.MAX_LENGTHS.FIRST_NAME),
        allowNull: false,
      },
      lastName: {
        type: type.STRING(SCHEMAS.MAX_LENGTHS.LAST_NAME),
        allowNull: false,
      },
      email: {
        type: type.STRING(SCHEMAS.MAX_LENGTHS.EMAIL),
        allowNull: false,
      },
      password: {
        type: type.STRING(SCHEMAS.MAX_LENGTHS.PASSWORD),
        allowNull: false,
      },
      lastLoginDate: {
        type: type.DATEONLY,
        allowNull: false,
        defaultValue: type.NOW,
      },
      id_company: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: 'companies',
          key: 'id',
        },
      },
      id_rol: {
        type: type.INTEGER,
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
};
