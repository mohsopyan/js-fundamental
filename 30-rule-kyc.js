const RULE_STATE = require("./rule-states");
const ERROR_CODES = require("./17-error-codes");
const ERROR_TYPES = require("./24-error-classification");
const { createError } = require("./25-error-factory");

const kycRule = {
    name: "kycRule",
    priority: 1,

    run(user) {
        if (user.kycVerified !== true) {
            return {
                state: RULE_STATE.FAILED,
                error: createError({
                    type: ERROR_TYPES.COMPLIANCE,
                    code: ERROR_CODES.KYC_NOT_VERIFIED.code,
                    message: ERROR_CODES.KYC_NOT_VERIFIED.message,
                    field: "kycVerified",
                })
            }
        }

        return {
            state: RULE_STATE.PASSED,
            error: null,
        }
    }
}

module.exports = kycRule;