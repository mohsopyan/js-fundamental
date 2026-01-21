const RULE_STATE = require("./rule-states")
const { createError } = require("./25-error-factory");
const ERROR_TYPES = require("./24-error-classification");
const ERROR_CODES = require("./17-error-codes");

const activeRule = {
  name: "activeRule",
  priority: 1,

  run (user) {
    if(user.active !== true) {
      return {
        state: RULE_STATE.FAILED,
        error: createError({
          type: ERROR_TYPES.ACCESS,
          code: ERROR_CODES.INACTIVE_USER.code,
          message: ERROR_CODES.INACTIVE_USER.message,
          field: "active",
        }),
      };
    }

    return {
      state: RULE_STATE.PASSED,
      error: null
    }
  }
}


module.exports = activeRule;
