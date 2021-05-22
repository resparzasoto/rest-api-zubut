'use strict';

const createHttpError = require('http-errors');
const { validate } = require('jsonschema');

module.exports = (() => {
  const validationHandler = (schema, check = 'body') => {
    return (req, res, next) => {
      const { valid } = validate(req[check], schema[check]);

      if (!valid) {
        next(createHttpError.BadRequest());
      }

      next();
    };
  };

  return {
    validationHandler,
  };
})();
