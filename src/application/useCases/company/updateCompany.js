'use strict';

const validations = require('./validations');

module.exports = (dependencies) => {
  const {
    DatabaseService: { companyRepository },
  } = dependencies;

  const { validateIdCompany, validateCompanyValues, validateFoundedCompany } =
    validations(dependencies);

  const execute = async (id, company) => {
    await validateIdCompany(id);
    await validateCompanyValues(company);
    await validateFoundedCompany(id);

    const updatedCompany = await companyRepository.update(id, company);
    return updatedCompany;
  };

  return {
    execute,
  };
};
