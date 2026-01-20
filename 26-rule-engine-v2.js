function runRules(user, rules, context = { mode: "FAIL_FAST" }) {
  const errors = [];

  const sortedRules = [...rules].sort((a, b) => (a.priority ?? 100 ) - (b.priority ?? 100));

  for (let rule of sortedRules) {
    const result = rule.run(user, context);

    if (!result.passed) {
      // ACCESS ERROR -> Selalu stop
      if (result.error.type === "ACCESS_ERROR") {
        return {
          passed: false,
          error: result.error
        };
      }

      // REQUEST -> fail fast
      if (context.mode === "FAIL_FAST") {
        return {
          passed: false,
          error: result.error
        };
      }

      // Batch -> Collect
      if (context.mode === "BATCH") {
        errors.push(result.error);
      }
    }
  }

  if (errors.length > 0) {
    return {
      passed: false,
      errors,
    };
  }

  return {
    passed: true,
    error: null,
  };
}

module.exports = runRules;
