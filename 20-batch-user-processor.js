const validateUser = require("./18-user-validation");
const { decideUserAccess } = require("./22-access-decision");

function processUsers(users) {
  let validUsers = [];
  let accessDeniedUsers = [];
  let invalidUsers = [];

  for (let user of users) {
    const result = validateUser(user);

    if (result.valid) {
      const decision = decideUserAccess(user);

      if (decision.status === "ALLOWED") {
        validUsers.push(user);
      } else {
        accessDeniedUsers.push({
          user,
          reason: decision.reason,
          code: decision.code,
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
