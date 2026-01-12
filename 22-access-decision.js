function canAccessSystem(user) {
  if (user.active !== true) {
    return {
      allowed: false,
      reason: "User is not active",
    };
  }

  if (user.age < 18) {
    return {
      allowed: false,
      reason: "User is under 18",
    };
  }

  return {
    allowed: true,
    reason: null,
  };
}

module.exports = { canAccessSystem };
