'use strict';

const companies = require('./companies');
const users = require('./users');

const express = require('express');

module.exports = (dependencies) => {
  const routes = express.Router();

  const companiesRouter = companies(dependencies);
  const usersRouter = users(dependencies);

  routes.use('/companies', companiesRouter);
  routes.use('/users', usersRouter);

  return routes;
};
