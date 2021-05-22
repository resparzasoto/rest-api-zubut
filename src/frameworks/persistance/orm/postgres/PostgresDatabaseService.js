'use strict';

const DatabaseService = require('../../../../application/contracts/DatabaseService');

const { Sequelize } = require('sequelize');
const environment = require('../../../../config/environment');

module.exports = class PostgresDataBaseService extends DatabaseService {
  constructor() {
    super();
  }

  get db() {
    return PostgresDataBaseService._db;
  }

  async initDatabase() {
    if (PostgresDataBaseService._db) {
      return;
    }

    const sequelize = new Sequelize({
      dialect: environment.database.dialect,
      database: environment.database.name,
      host: environment.database.host,
      username: environment.database.username,
      password: environment.database.password,
      native: environment.database.native,
    });

    try {
      await sequelize.authenticate();
      await sequelize.sync({
        force: environment.database.sync,
      });

      PostgresDataBaseService._db = sequelize;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(
        `[DatabaseService]: the application can't established connection with database`
      );

      // eslint-disable-next-line no-magic-numbers
      process.exit(1);
    }
  }
};
