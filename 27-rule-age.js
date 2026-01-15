const ERROR_CODES = require("./17-error-codes");
const ERROR_TYPES = require("./24-error-classification");
const { createError } = require("./25-error-factory");

function ageRule(user) {
  if (typeof user.age !== "number" || user.age < 18) {
    return {
      passed: false,
      error: createError({
        type: ERROR_TYPES.VALIDATION,
        code: ERROR_CODES.INVALID_AGE.code,
        message: ERROR_CODES.INVALID_AGE.message,
        field: "age",
      }),
    };
  }

  return {
    passed: true,
    error: null,
  };
}

module.exports = ageRule;
