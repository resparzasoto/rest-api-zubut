'use strict';

const validations = require('./validations');
const encryption = require('../../../frameworks/common/encryption');

module.exports = (dependencies) => {
  const {
    DatabaseService: { userRepository },
  } = dependencies;

  const { validateUserValues } = validations(dependencies);

  const execute = async (user) => {
    await validateUserValues(user);

    user.password = await encryption.hash(user.password);

    const addedUser = await userRepository.add(user);
    return addedUser;
  };

  return {
    execute,
  };
};
