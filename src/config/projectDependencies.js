'use strict';

const PostgresDataBaseService = require('../frameworks/persistance/orm/postgres/PostgresDatabaseService');

module.exports = (() => {
  const dependencies = {
    DatabaseService: new PostgresDataBaseService(),
  };

  return dependencies;
})();
