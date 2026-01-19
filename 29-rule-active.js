const { createError } = require("./25-error-factory");
const ERROR_TYPES = require("./24-error-classification");
const ERROR_CODES = require("./17-error-codes");

const activeRule = {
  name: "activeRule",
  strategy: "FAIL_FAST",

  run (user) {
    if(user.active !== true) {
      return {
        passed: false,
        error: createError({
          type: ERROR_TYPES.ACCESS,
          code: ERROR_CODES.INACTIVE_USER.code,
          message: ERROR_CODES.INACTIVE_USER.message,
          field: "active",
        }),
      };
    }

    return {
      passed: true,
      error: null
    }
  }
}


module.exports = activeRule;
