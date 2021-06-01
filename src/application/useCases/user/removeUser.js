'use strict';

const validations = require('./validations');

module.exports = (dependencies) => {
  const { validateIdUser, validateFoundedUser, validateRemovedUser } =
    validations(dependencies);

  const execute = async (id) => {
    await validateIdUser(id);
    const foundedUser = await validateFoundedUser(id);
    await validateRemovedUser(id);

    return foundedUser;
  };

  return {
    execute,
  };
};
