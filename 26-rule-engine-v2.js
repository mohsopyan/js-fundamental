const RULE_STATE = require("./rule-states");

function runRules(user, rules, options = { mode: "FAIL_FAST" }) {
  const results = {};
  const errors = [];

  const sortedRules = [...rules].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));

  for (let rule of sortedRules) {
    // Dependecy check
    if (rule.dependsOn) {
      const blocked = rule.dependsOn.some((dep) => results[dep]?.state === RULE_STATE.FAILED);

      if (blocked) {
        results[rule.name] = {
          state: RULE_STATE.SKIPPED,
          error: null,
        };
        continue;
      }
    }

    const result = rule.run(user);
    results[rule.name] = result;

    if (result.state === RULE_STATE.FAILED) {
      if (options.mode === "FAIL_FAST") {
        return {
          passed: false,
          error: result.error,
          results,
        };
      }

      errors.push(result.error);
    }
  }

  if (errors.length > 0) {
    return {
      passed: false,
      errors,
      results,
    };
  }

  return {
    passed: true,
    error: null,
    results,
  };
}

module.exports = runRules;
