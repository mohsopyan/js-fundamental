const { createError } = require("./25-error-factory");
const ERROR_TYPES = require("./24-error-classification");
const ERROR_CODES = require("./17-error-codes");

function validateUser(user) {
  let errors = [];

  if (typeof user.name !== "string" || user.name.trim() === "") {
    errors.push(
      createError({
        type: ERROR_TYPES.VALIDATION,
        ...ERROR_CODES.INVALID_NAME,
        field: "name",
      })
    );
  }

  if (typeof user.age !== "number") {
    errors.push(
      createError({
        type: ERROR_TYPES.VALIDATION,
        ...ERROR_CODES.INVALID_AGE,
        field: "age",
      })
    );
  }

  if (typeof user.active !== "boolean") {
    errors.push(
      createError({
        type: ERROR_TYPES.VALIDATION,
        ...ERROR_CODES.INVALID_ACTIVE,
        field: "active",
      })
    );
  }

  if (errors.length > 0) {
    return {
      valid: false,
      errors,
    };
  }

  return {
    valid: true,
    data: user,
  };
}

module.exports = validateUser;
