'use strict';

const { StatusCodes, ReasonPhrases } = require('http-status-codes');

module.exports = (() => {
  const success = (
    req,
    res,
    statusCode = StatusCodes.OK,
    message = ReasonPhrases.OK,
    data = undefined
  ) => {
    res.status(statusCode).send({
      meta: {
        error: false,
        message: message,
        timestamp: new Date().getTime(),
      },
      data: data,
    });
  };

  const error = (
    req,
    res,
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    message = ReasonPhrases.INTERNAL_SERVER_ERROR
  ) => {
    res.status(statusCode).send({
      meta: {
        error: true,
        message: message,
        timestamp: new Date().getTime(),
      },
    });
  };

  return {
    success,
    error,
  };
})();
