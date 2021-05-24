'use strict';

module.exports = {
  MESSAGES: {
    INVALID_COMPANY_VALUES: 'invalid company values',
    INVALID_ID_VALUE: 'invalid id value',
    COMPANY_NOT_FOUND: 'company not found',
  },
  SCHEMAS: {
    FORMAT: {
      REGISTERED_DATE: 'date',
    },
    PATTERNS: {
      RFC: '^([A-ZÑ&]{3,4}) ?(?:- ?)?(d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]d|3[01])) ?(?:- ?)?([A-Zd]{2})([Ad])$',
      TELEPHONE: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$',
      OBJECT_ID: '^[0-9a-fA-F]{24}$',
    },
    MIN_LENGTHS: {
      RFC: 12,
    },
    MAX_LENGTHS: {
      LEGAL_NAME: 60,
      COMERCIAL_NAME: 60,
      RFC: 13,
      TELEPHONE: 15,
      ROL_NAME: 15,
    },
    DEFAULT_VALUES: {
      COMERCIAL_NAME: '',
    },
  },
};
