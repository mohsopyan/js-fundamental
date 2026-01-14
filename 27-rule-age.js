const ERROR_CODES = require("./17-error-codes");
const ERROR_TYPES = require("./24-error-classification");
const { createError } = require("./25-error-factory");

function ageRule(user) {
  if (typeof user.age !== "number" || user.age < 18) {
    return createError({
      type: ERROR_TYPES.VALIDATION,
      ...ERROR_CODES.INVALID_AGE,
      field: "age",
    });
  }

  return null;
}

module.exports = ageRule;
