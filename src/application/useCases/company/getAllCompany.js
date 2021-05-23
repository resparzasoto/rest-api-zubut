'use strict';

module.exports = (dependencies) => {
  const {
    DatabaseService: { companyRepository },
  } = dependencies;

  const execute = async () => {
    const allCompany = await companyRepository.getAll();
    return allCompany;
  };

  return {
    execute,
  };
};
