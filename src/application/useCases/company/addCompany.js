'use strict';

const validations = require('./validations');

module.exports = (dependencies) => {
  const {
    DatabaseService: { companyRepository },
  } = dependencies;

  const { validateCompanyValues } = validations(dependencies);

  const execute = async (company) => {
    await validateCompanyValues(company);

    const addedCompany = await companyRepository.add(company);
    return addedCompany;
  };

  return {
    execute,
  };
};
