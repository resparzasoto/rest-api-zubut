'use strict';

const { SCHEMAS } = require('../../../../config/constants');

const headersSchema = {};

const paramsSchema = {};

const querySchema = {};

const bodySchema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', maxLength: SCHEMAS.MAX_LENGTHS.FIRST_NAME },
    lastName: {
      type: 'string',
      maxLength: SCHEMAS.MAX_LENGTHS.LAST_NAME,
    },
    email: {
      type: 'string',
      // minLength: SCHEMAS.MIN_LENGTHS.EMAIL,
      maxLength: SCHEMAS.MAX_LENGTHS.EMAIL,
      // pattern: SCHEMAS.PATTERNS.RFC,
    },
    password: {
      type: 'string',
      maxLength: SCHEMAS.MAX_LENGTHS.PASSWORD,
      // pattern: SCHEMAS.PATTERNS.TELEPHONE,
    },
    lastLoginDate: {
      type: 'string',
      format: SCHEMAS.FORMAT.REGISTERED_DATE,
    },
    id_company: {
      type: 'number',
    },
    id_rol: {
      type: 'number',
    },
  },
  required: [
    'firstName',
    'lastName',
    'email',
    'password',
    'lastLoginDate',
    'id_company',
    'id_rol',
  ],
};

const responseSchema = {};

module.exports = {
  headers: headersSchema,
  params: paramsSchema,
  query: querySchema,
  body: bodySchema,
  response: responseSchema,
};
