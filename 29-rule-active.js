const { createError } = require("./25-error-factory");
const ERROR_TYPES = require("./24-error-classification");
const ERROR_CODES = require("./17-error-codes");

function activeRule(user) {
  if (user.active !== true) {
    return createError({
      type: ERROR_TYPES.ACCESS,
      ...ERROR_CODES.INACTIVE_USER,
      field: "active",
    });
  }

  return null;
}

module.exports = activeRule;
