function runRules(user, rules, options = { mode: "FAIL_FAST" }) {
  const errors = [];

  for (let rule of rules) {
    const result = rule.run(user);

    if (!result.passed) {
      const mode = rule.strategy || options.mode || "FAIL_FAST";

      if (mode === "FAIL_FAST") {
        return {
          passed: false,
          error: result.error
        };
      }

      if (mode === "COLLECT") {
        errors.push(result.error);
      }
    }
  }

  if (errors.length > 0) {
    return {
      passed: false,
      errors
    };
  }

  return {
    passed: true,
    error: null,
  };
}

module.exports = runRules;
