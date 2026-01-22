const RULE_STATE = require("./rule-states");

const withdrawRule = {
  name: "withdrawRule",
  priority: 3,
  dependsOn: ["kycRule"],

  run(user) {
    return {
      state: RULE_STATE.PASSED,
      error: null,
    };
  },
};

module.exports = withdrawRule;
