'use strict';

module.exports = class User {
  constructor(
    id = undefined,
    firstName,
    lastName,
    email,
    password,
    lastLoginDate,
    id_company,
    id_rol
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.lastLoginDate = lastLoginDate;
    this.id_company = id_company;
    this.id_rol = id_rol;
  }
};
