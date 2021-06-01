'use strict';

const UserRepository = require('../../../../../application/contracts/repositories/UserRepository');

module.exports = class PostgresUserRepository extends UserRepository {
  constructor(dependencies) {
    super();

    this.userModel = dependencies.userModel;
  }

  async add(user) {
    const addedUser = await this.userModel.create(user);
    return addedUser;
  }

  async getById(id) {
    const foundedUser = await this.userModel.findByPk(id);
    return foundedUser;
  }

  async getAll() {
    const users = await this.userModel.findAll();
    return users;
  }

  async update(id, user) {
    const searchedUser = await this.getById(id);

    searchedUser.firstName = user.firstName;
    searchedUser.lastName = user.lastName;
    searchedUser.email = user.email;
    searchedUser.password = user.password;
    searchedUser.lastLoginDate = user.lastLoginDate;
    searchedUser.id_company = user.id_company;
    searchedUser.id_rol = user.id_rol;

    const updatedUser = await searchedUser.save();
    return updatedUser;
  }

  async remove(id) {
    const rowsAffected = await this.userModel.destroy({
      where: { id },
    });
    return rowsAffected;
  }
};
