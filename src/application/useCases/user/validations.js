/* eslint-disable require-await */
'use strict';

const { MESSAGES } = require('../../../config/constants');

const createHttpError = require('http-errors');
const { StatusCodes } = require('http-status-codes');

module.exports = (dependencies) => {
  const {
    DatabaseService: { userRepository },
  } = dependencies;

  const validateUserValues = async (user) => {
    if (
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.password ||
      !user.lastLoginDate ||
      !user.id_company ||
      !user.id_rol
    ) {
      throw createHttpError(
        StatusCodes.BAD_REQUEST,
        MESSAGES.INVALID_COMPANY_VALUES
      );
    }

    return Promise.resolve(true);
  };

  const validateIdUser = async (id) => {
    if (!id) {
      throw createHttpError(StatusCodes.BAD_REQUEST, MESSAGES.INVALID_ID_VALUE);
    }

    return Promise.resolve(true);
  };

  const validateFoundedUser = async (id) => {
    const foundedUser = await userRepository.getById(id);

    if (!foundedUser) {
      throw createHttpError(StatusCodes.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
    }

    return foundedUser;
  };

  const validateRemovedUser = async (id) => {
    const rowsAffected = await userRepository.remove(id);

    // eslint-disable-next-line no-magic-numbers
    if (rowsAffected < 1) {
      throw createHttpError(StatusCodes.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
    }

    return Promise.resolve(true);
  };

  return {
    validateUserValues,
    validateIdUser,
    validateFoundedUser,
    validateRemovedUser,
  };
};
