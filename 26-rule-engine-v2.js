function runRules(user, rules) {
    for (let rule of rules) {
        const error = rule(user);

        if(error) {
            return {
                passed: false,
                error
            };
        }
    }

    return {
        passed: true,
        reason: null
    }
}

module.exports = runRules;