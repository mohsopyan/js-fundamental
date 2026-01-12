const validateUser = require("./18-user-validation");
const { canAccessSystem } = require("./22-access-decision");

function processUsers(users) {
  let validUsers = [];
  let accessDeniedUsers = [];
  let invalidUsers = [];

  for (let user of users) {
    const result = validateUser(user);

    if (result.valid) {
      const access = canAccessSystem(user);

      if (access.allowed) {
        validUsers.push(user);
      } else {
        accessDeniedUsers.push({
          user,
          reason: access.reason,
        });
      }
    } else {
      invalidUsers.push({
        user,
        errors: result.errors,
      });
    }
  }

  return {
    total: users.length,
    validCount: validUsers.length,
    accessDeniedCount: accessDeniedUsers.length,
    invalidCount: invalidUsers.length,
    validUsers,
    accessDeniedUsers,
    invalidUsers
  };
}

module.exports = processUsers;
