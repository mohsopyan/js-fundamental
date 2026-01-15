function runRules(user, rules) {
  for (let rule of rules) {
    const result = rule(user);

    if (!result.passed) {
      return {
        passed: false,
        error: result.error,
      };
    }
  }
  return {
    passed: true,
    error: null,
  };
}

module.exports = runRules;
