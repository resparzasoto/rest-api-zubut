'use strict';

const validations = require('./validations');

module.exports = (dependencies) => {
  const { validateIdCompany, validateFoundedCompany } =
    validations(dependencies);

  const execute = async (id) => {
    await validateIdCompany(id);

    const foundedCompany = await validateFoundedCompany(id);
    return foundedCompany;
  };

  return {
    execute,
  };
};
