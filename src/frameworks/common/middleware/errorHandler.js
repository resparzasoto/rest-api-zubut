'use strict';

const logger = require('../logger');
const response = require('../response');
const environment = require('../../../config/environment');

module.exports = (() => {
  const wrap = (err, req, res, next) => {
    if (!environment.app.dev) {
      delete err.stack;
    }

    next(err);
  };

  const log = (err, req, res, next) => {
    logger.error(`[${err.constructor.name}]: ${err.message}`);

    next(err);
  };

  // eslint-disable-next-line no-unused-vars
  const error = (err, req, res, next) => {
    response.error(req, res, err.statusCode, err.message, err);
  };

  return {
    wrap,
    log,
    error,
  };
})();
