'use strict';

require('dotenv').config();

module.exports = (() => {
  const environment = {
    app: {
      environment: process.env.NODE_ENV,
      dev: process.env.NODE_ENV === 'development',
      port: process.env.PORT,
      host: process.env.HOST,
    },
    database: {
      sync: process.env.DATABASE_SYNC == 'true',
      force: process.env.DATABASE_SYNC_FORCE === 'true',
    },
  };

  return environment;
})();
