'use strict';

const DatabaseService = require('../../../../application/contracts/services/DatabaseService');
const environment = require('../../../../config/environment');
const logger = require('../../../common/logger');

const { PostgresCompanyRepository } = require('./repositories');

const { Sequelize } = require('sequelize');
const { CompanyModel } = require('./models');

module.exports = class PostgresDataBaseService extends DatabaseService {
  constructor() {
    super();

    this.companyRepository = null;
  }

  async initDatabase() {
    const sequelize = new Sequelize({
      dialect: environment.database.dialect,
      database: environment.database.name,
      host: environment.database.host,
      username: environment.database.username,
      password: environment.database.password,
      native: environment.database.native,
    });

    const companyModel = CompanyModel({
      sequelize: sequelize,
      type: Sequelize,
    });

    this.companyRepository = new PostgresCompanyRepository({
      companyModel: companyModel,
    });

    try {
      await sequelize.authenticate();
      await sequelize.sync({
        force: environment.database.sync,
      });
    } catch (err) {
      logger.error(`[DatabaseService]: ${err.message}`);
      // eslint-disable-next-line no-magic-numbers
      process.exit(1);
    }
  }
};
