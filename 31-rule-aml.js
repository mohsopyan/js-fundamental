const RULE_STATE = require("./rule-states");
const ERROR_CODES = require("./17-error-codes");
const ERROR_TYPES = require("./24-error-classification");
const { createError } = require("./25-error-factory");
const { priority } = require("./30-rule-kyc");

const amlRule = {
  name: "amlRule",
  priority: 3,
  dependsOn: ["kycRule"],

  run(user) {
    if (user.amlCleared !== true) {
      return {
        state: RULE_STATE.FAILED,
        error: createError({
          type: ERROR_TYPES.COMPLIANCE,
          code: ERROR_CODES.AML_NOT_CLEARED.code,
          message: ERROR_CODES.AML_NOT_CLEARED.message,
          field: "amlCleared",
        }),
      };
    }

    return {
      state: RULE_STATE.PASSED,
      error: null,
    };
  },
};

module.exports = amlRule;
