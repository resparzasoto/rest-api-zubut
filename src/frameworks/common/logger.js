'use strict';

const environment = require('../../config/environment');

const winston = require('winston');

module.exports = (() => {
  const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
  });

  if (environment.app.dev) {
    logger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    );
  }

  return logger;
})();
