'use strict';

const response = require('../response');

const { StatusCodes, ReasonPhrases } = require('http-status-codes');

module.exports = (() => {
  // eslint-disable-next-line no-unused-vars
  const notFound = (req, res, next) => {
    response.success(req, res, StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
  };

  return {
    notFound,
  };
})();
