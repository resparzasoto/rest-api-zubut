'use strict';

const validations = require('./validations');

module.exports = (dependencies) => {
  const { validateIdCompany, validateFoundedCompany, validateRemovedCompany } =
    validations(dependencies);

  const execute = async (id) => {
    await validateIdCompany(id);
    const foundedCompany = await validateFoundedCompany(id);
    await validateRemovedCompany(id);

    return foundedCompany;
  };

  return {
    execute,
  };
};
