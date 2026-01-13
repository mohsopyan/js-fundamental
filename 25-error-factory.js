const ERROR_TYPES = require("./24-error-classification");

function createError({ type, code, message, field = null }) {
  return {
    type,
    code,
    message,
    field,
  };
}

module.exports = { createError };