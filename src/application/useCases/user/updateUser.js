'use strict';

const validations = require('./validations');

module.exports = (dependencies) => {
  const {
    DatabaseService: { userRepository },
  } = dependencies;

  const { validateIdUser, validateUserValues, validateFoundedUser } =
    validations(dependencies);

  const execute = async (id, user) => {
    await validateIdUser(id);
    await validateUserValues(user);
    await validateFoundedUser(id);

    const updatedUser = await userRepository.update(id, user);
    return updatedUser;
  };

  return {
    execute,
  };
};
