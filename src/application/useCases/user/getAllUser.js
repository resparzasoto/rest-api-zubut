'use strict';

module.exports = (dependencies) => {
  const {
    DatabaseService: { userRepository },
  } = dependencies;

  const execute = async () => {
    const users = await userRepository.getAll();
    return users;
  };

  return {
    execute,
  };
};
