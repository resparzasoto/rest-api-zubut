'use strict';

module.exports = class DatabaseService {
  constructor() {
    this.companyRepository = null;
    this.userRepository = null;
  }

  initDatabase() {
    return Promise.reject(new Error('not implemented'));
  }
};
