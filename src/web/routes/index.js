'use strict';

const companies = require('./companies');

const express = require('express');

module.exports = (dependencies) => {
  const routes = express.Router();

  const companiesRouter = companies(dependencies);

  routes.use('/companies', companiesRouter);

  return routes;
};
