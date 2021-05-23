'use strict';

const companyController = require('../../controllers/companyController');
const {
  validationHandler,
} = require('../../frameworks/common/middleware/validationHandler');

const express = require('express');
const {
  addCompanySchema,
  getByIdCompanySchema,
  updateCompanySchema,
  deleteCompanySchema,
} = require('../../frameworks/common/schemas/company');

module.exports = (dependencies) => {
  const router = express.Router();
  const controller = companyController(dependencies);

  router
    .route('/')
    .post(validationHandler(addCompanySchema, 'body'), controller.add)
    .get(controller.getAll);

  router
    .route('/:id')
    .get(validationHandler(getByIdCompanySchema, 'params'), controller.getById)
    .put(
      validationHandler(updateCompanySchema, 'params'),
      validationHandler(updateCompanySchema, 'body'),
      controller.update
    )
    .delete(
      validationHandler(deleteCompanySchema, 'params'),
      controller.remove
    );

  return router;
};
