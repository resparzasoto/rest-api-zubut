'use strict';

module.exports = class DatabaseService {
  constructor() {
    this.companyRepository = null;
  }

  initDatabase() {
    return Promise.reject(new Error('not implemented'));
  }
};
