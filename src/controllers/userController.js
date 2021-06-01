'use strict';

const User = require('../entities/User');
const response = require('../frameworks/common/response');

const {
  addUser,
  getByIdUser,
  getAllUser,
  updateUser,
  removeUser,
} = require('../application/useCases/user');

const { StatusCodes, ReasonPhrases } = require('http-status-codes');

module.exports = (dependencies) => {
  const add = async (req, res, next) => {
    const {
      firstName,
      lastName,
      email,
      password,
      lastLoginDate,
      id_company,
      id_rol,
    } = req.body;

    const addUserCommand = addUser(dependencies);

    try {
      const user = new User(
        undefined,
        firstName,
        lastName,
        email,
        password,
        lastLoginDate,
        id_company,
        id_rol
      );
      const data = await addUserCommand.execute(user);
      return response.success(
        req,
        res,
        StatusCodes.CREATED,
        ReasonPhrases.CREATED,
        data
      );
    } catch (err) {
      next(err);
    }
  };

  const getById = async (req, res, next) => {
    const { id } = req.params;

    const getByIdUserCommand = getByIdUser(dependencies);

    try {
      const data = await getByIdUserCommand.execute(id);
      return response.success(req, res, StatusCodes.OK, ReasonPhrases.OK, data);
    } catch (err) {
      next(err);
    }
  };

  const getAll = async (req, res, next) => {
    const getAllUserCommand = getAllUser(dependencies);

    try {
      const data = await getAllUserCommand.execute();
      return response.success(req, res, StatusCodes.OK, ReasonPhrases.OK, data);
    } catch (err) {
      next(err);
    }
  };

  const update = async (req, res, next) => {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      email,
      password,
      lastLoginDate,
      id_company,
      id_rol,
    } = req.body;

    const updateUserCommand = updateUser(dependencies);

    try {
      const user = new User(
        undefined,
        firstName,
        lastName,
        email,
        password,
        lastLoginDate,
        id_company,
        id_rol
      );
      const data = await updateUserCommand.execute(id, user);
      return response.success(req, res, StatusCodes.OK, ReasonPhrases.OK, data);
    } catch (err) {
      next(err);
    }
  };

  const remove = async (req, res, next) => {
    const { id } = req.params;

    const removeUserCommand = removeUser(dependencies);

    try {
      const data = await removeUserCommand.execute(id);
      return response.success(req, res, StatusCodes.OK, ReasonPhrases.OK, data);
    } catch (err) {
      next(err);
    }
  };

  return {
    add,
    getAll,
    getById,
    update,
    remove,
  };
};
