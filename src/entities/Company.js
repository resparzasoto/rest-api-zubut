'use strict';

module.exports = class Company {
  constructor(
    id = undefined,
    legalName,
    comercialName = undefined,
    rfc,
    telephone,
    registeredDate
  ) {
    this.id = id;
    this.legalName = legalName;
    this.comercialName = comercialName;
    this.rfc = rfc;
    this.telephone = telephone;
    this.registeredDate = registeredDate;
  }
};
