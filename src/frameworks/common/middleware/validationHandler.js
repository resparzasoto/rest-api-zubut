/* eslint-disable no-magic-numbers */
'use strict';

const createHttpError = require('http-errors');
const { StatusCodes } = require('http-status-codes');
const { validate } = require('jsonschema');

module.exports = (() => {
  const validationHandler = (schema, check = 'body') => {
    return (req, res, next) => {
      const { valid, errors } = validate(req[check], schema[check]);

      if (!valid) {
        const property = errors[0].path[0];
        const message = errors[0].message;

        next(
          createHttpError(StatusCodes.BAD_REQUEST, `${property} ${message}`)
        );
      }

      next();
    };
  };

  return {
    validationHandler,
  };
})();
