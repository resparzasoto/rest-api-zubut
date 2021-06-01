'use strict';

const bcryptjs = require('bcryptjs');

const { SECURITY } = require('../../config/constants');

const hash = (data) => {
  return bcryptjs.hash(data, SECURITY.SALT_OF_ENCRYPTION);
};

const compare = (data, encryptedData) => {
  return bcryptjs.compare(data, encryptedData);
};

module.exports = {
  hash,
  compare,
};
