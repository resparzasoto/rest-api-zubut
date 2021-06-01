'use strict';

const userController = require('../../controllers/userController');
const {
  validationHandler,
} = require('../../frameworks/common/middleware/validationHandler');

const express = require('express');
const {
  addUserSchema,
  getByIdUserSchema,
  updateUserSchema,
  removeUserSchema,
} = require('../../frameworks/common/schemas/user');

module.exports = (dependencies) => {
  const router = express.Router();
  const controller = userController(dependencies);

  router
    .route('/')
    .post(validationHandler(addUserSchema, 'body'), controller.add)
    .get(controller.getAll);

  router
    .route('/:id')
    .get(validationHandler(getByIdUserSchema, 'params'), controller.getById)
    .put(
      validationHandler(updateUserSchema, 'params'),
      validationHandler(updateUserSchema, 'body'),
      controller.update
    )
    .delete(validationHandler(removeUserSchema, 'params'), controller.remove);

  return router;
};
