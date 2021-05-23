'use strict';

const headersSchema = {};

const paramsSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  required: ['id'],
};

const querySchema = {};

const bodySchema = {};

const responseSchema = {};

module.exports = {
  headers: headersSchema,
  params: paramsSchema,
  query: querySchema,
  body: bodySchema,
  response: responseSchema,
};
