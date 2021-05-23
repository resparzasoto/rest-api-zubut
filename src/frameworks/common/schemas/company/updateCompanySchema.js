'use strict';

const { SCHEMAS } = require('../../../../config/constants');

const headersSchema = {};

const paramsSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  required: ['id'],
};

const querySchema = {};

const bodySchema = {
  type: 'object',
  properties: {
    legalName: { type: 'string', maxLength: SCHEMAS.MAX_LENGTHS.LEGAL_NAME },
    comercialName: {
      type: 'string',
      maxLength: SCHEMAS.MAX_LENGTHS.COMERCIAL_NAME,
    },
    rfc: {
      type: 'string',
      maxLength: SCHEMAS.MAX_LENGTHS.RFC,
      //   pattern: SCHEMAS.PATTERNS.RFC,
    },
    telephone: {
      type: 'string',
      maxLength: SCHEMAS.MAX_LENGTHS.TELEPHONE,
      pattern: SCHEMAS.PATTERNS.TELEPHONE,
    },
    registeredDate: {
      type: 'string',
      format: SCHEMAS.FORMAT.REGISTERED_DATE,
    },
  },
  required: ['legalName', 'rfc', 'telephone', 'registeredDate'],
};

const responseSchema = {};

module.exports = {
  headers: headersSchema,
  params: paramsSchema,
  query: querySchema,
  body: bodySchema,
  response: responseSchema,
};
