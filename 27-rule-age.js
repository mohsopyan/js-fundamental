const ERROR_CODES = require("./17-error-codes");
const ERROR_TYPES = require("./24-error-classification");
const { createError } = require("./25-error-factory");
const RULE_STATE = require("./rule-states");

const ageRule = {
  name: "ageRule",
  priority: 2,

  run(user) {
    if (typeof user.age !== "number" || user.age < 18) {
      return {
        state: RULE_STATE.FAILED,
        error: createError({
          type: ERROR_TYPES.VALIDATION,
          code: ERROR_CODES.INVALID_AGE.code,
          message: ERROR_CODES.INVALID_AGE.message,
          field: "age",
        }),
      };
    }

    return {
      state: RULE_STATE.PASSED,
      error: null,
    };
  },
};

module.exports = ageRule;
