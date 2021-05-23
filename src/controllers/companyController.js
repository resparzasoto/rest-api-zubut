'use strict';

const Company = require('../entities/Company');
const response = require('../frameworks/common/response');

const {
  addCompany,
  getByIdCompany,
  getAllCompany,
  updateCompany,
  removeCompany,
} = require('../application/useCases/company');

const { StatusCodes, ReasonPhrases } = require('http-status-codes');

module.exports = (dependencies) => {
  const add = async (req, res, next) => {
    const { legalName, comercialName, rfc, telephone, registeredDate } =
      req.body;

    const addCompanyCommand = addCompany(dependencies);

    try {
      const company = new Company(
        undefined,
        legalName,
        comercialName,
        rfc,
        telephone,
        registeredDate
      );
      const data = await addCompanyCommand.execute(company);
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

    const getByIdCompanyCommand = getByIdCompany(dependencies);

    try {
      const data = await getByIdCompanyCommand.execute(id);
      return response.success(req, res, StatusCodes.OK, ReasonPhrases.OK, data);
    } catch (err) {
      next(err);
    }
  };

  const getAll = async (req, res, next) => {
    const getAllCompanyCommand = getAllCompany(dependencies);

    try {
      const data = await getAllCompanyCommand.execute();
      return response.success(req, res, StatusCodes.OK, ReasonPhrases.OK, data);
    } catch (err) {
      next(err);
    }
  };

  const update = async (req, res, next) => {
    const { id } = req.params;
    const { legalName, comercialName, rfc, telephone, registeredDate } =
      req.body;

    const updateCompanyCommand = updateCompany(dependencies);

    const company = new Company(
      undefined,
      legalName,
      comercialName,
      rfc,
      telephone,
      registeredDate
    );

    try {
      const data = await updateCompanyCommand.execute(id, company);
      return response.success(req, res, StatusCodes.OK, ReasonPhrases.OK, data);
    } catch (err) {
      next(err);
    }
  };

  const remove = async (req, res, next) => {
    const { id } = req.params;

    const removeCompanyCommand = removeCompany(dependencies);

    try {
      const data = await removeCompanyCommand.execute(id);
      return response.success(req, res, StatusCodes.OK, ReasonPhrases.OK, data);
    } catch (err) {
      next(err);
    }
  };

  return {
    add,
    getById,
    getAll,
    update,
    remove,
  };
};
