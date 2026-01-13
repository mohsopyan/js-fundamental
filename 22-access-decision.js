function decideUserAccess(user) {
  if (!user.active) {
    return {
      status: "DENIED",
      code: "ACCESS_INACTIVE_USER",
      reason: "User is not active"
    };
  }

  if (user.age < 18) {
    return {
      allowed: false,
      reason: "User is under 18",
    };
  }

  return {
    status: "ALLOWED",
    code: null,
    reason: null,
  };
}

module.exports = { decideUserAccess };
