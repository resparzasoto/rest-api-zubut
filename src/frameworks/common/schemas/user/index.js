'use strict';

const addUserSchema = require('./addUserSchema');
const getByIdUserSchema = require('./getByIdUserSchema');
const getAllUserSchema = require('./getAllUserSchema');
const updateUserSchema = require('./updateUserSchema');
const removeUserSchema = require('./removeUserSchema');

module.exports = {
  addUserSchema,
  getByIdUserSchema,
  getAllUserSchema,
  updateUserSchema,
  removeUserSchema,
};
