'use strict';

const CompanyRepository = require('../../../../../application/contracts/repositories/CompanyRepository');

module.exports = class PostgresCompanyRepository extends CompanyRepository {
  constructor(dependencies) {
    super();

    this.companyModel = dependencies.companyModel;
  }

  async add(company) {
    const addedCompany = await this.companyModel.create(company);
    return addedCompany;
  }

  async getById(id) {
    const foundedCompany = await this.companyModel.findByPk(id);
    return foundedCompany;
  }

  async getAll() {
    const companies = await this.companyModel.findAll();
    return companies;
  }

  async update(id, company) {
    const searchedCompany = await this.getById(id);

    searchedCompany.legalName = company.legalName;
    searchedCompany.comercialName = company.comercialName;
    searchedCompany.rfc = company.rfc;
    searchedCompany.telephone = company.telephone;
    searchedCompany.registeredDate = company.registeredDate;

    const updatedCompany = await searchedCompany.save();
    return updatedCompany;
  }

  async remove(id) {
    const rowsAffected = await this.companyModel.destroy({ where: { id } });
    return rowsAffected;
  }
};
