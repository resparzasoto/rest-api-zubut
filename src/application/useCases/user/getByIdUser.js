'use strict';

const validations = require('./validations');

module.exports = (dependencies) => {
  const { validateIdUser, validateFoundedUser } = validations(dependencies);

  const execute = async (id) => {
    await validateIdUser(id);

    const addedUser = await validateFoundedUser(id);
    return addedUser;
  };

  return {
    execute,
  };
};
