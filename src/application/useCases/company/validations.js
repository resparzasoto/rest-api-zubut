/* eslint-disable require-await */
'use strict';

const { MESSAGES } = require('../../../config/constants');

const createHttpError = require('http-errors');
const { StatusCodes } = require('http-status-codes');

module.exports = (dependencies) => {
  const {
    DatabaseService: { companyRepository },
  } = dependencies;

  const validateCompanyValues = async (company) => {
    if (
      !company.legalName ||
      !company.rfc ||
      !company.telephone ||
      !company.registeredDate
    ) {
      throw createHttpError(
        StatusCodes.BAD_REQUEST,
        MESSAGES.INVALID_COMPANY_VALUES
      );
    }

    return Promise.resolve(true);
  };

  const validateIdCompany = async (id) => {
    if (!id) {
      throw createHttpError(StatusCodes.BAD_REQUEST, MESSAGES.INVALID_ID_VALUE);
    }

    return Promise.resolve(true);
  };

  const validateFoundedCompany = async (id) => {
    const foundedCompany = await companyRepository.getById(id);

    if (!foundedCompany) {
      throw createHttpError(StatusCodes.NOT_FOUND, MESSAGES.COMPANY_NOT_FOUND);
    }

    return foundedCompany;
  };

  const validateRemovedCompany = async (id) => {
    const rowsAffected = await companyRepository.remove(id);

    // eslint-disable-next-line no-magic-numbers
    if (rowsAffected < 1) {
      throw createHttpError(StatusCodes.NOT_FOUND, MESSAGES.COMPANY_NOT_FOUND);
    }

    return Promise.resolve(true);
  };

  return {
    validateCompanyValues,
    validateIdCompany,
    validateFoundedCompany,
    validateRemovedCompany,
  };
};
