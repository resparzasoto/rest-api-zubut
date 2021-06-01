'use strict';

const DatabaseService = require('../../../../application/contracts/services/DatabaseService');
const environment = require('../../../../config/environment');
const database = require('../../../../config/database');
const logger = require('../../../common/logger');

const {
  PostgresCompanyRepository,
  PostgresUserRepository,
} = require('./repositories');

const { Sequelize } = require('sequelize');
const { CompanyModel, UserModel } = require('./models');

module.exports = class PostgresDataBaseService extends DatabaseService {
  constructor() {
    super();

    this.companyRepository = null;
  }

  async initDatabase() {
    let databaseConfig = {};

    if (environment.app.environment === 'production') {
      databaseConfig = database.production;
    } else if (environment.app.environment === 'development') {
      databaseConfig = database.development;
    } else {
      databaseConfig = database.test;
    }

    const sequelize = new Sequelize(databaseConfig);

    const Company = CompanyModel({
      sequelize: sequelize,
      type: Sequelize,
    });
    const User = UserModel({
      sequelize: sequelize,
      type: Sequelize,
    });

    this.companyRepository = new PostgresCompanyRepository({
      companyModel: Company,
    });

    this.userRepository = new PostgresUserRepository({
      userModel: User,
    });

    try {
      await sequelize.authenticate();

      if (environment.database.sync) {
        await sequelize.sync({ force: environment.database.force });
      }
    } catch (err) {
      logger.error(`[DatabaseService]: ${err.message}`);
      // eslint-disable-next-line no-magic-numbers
      process.exit(1);
    }
  }
};
