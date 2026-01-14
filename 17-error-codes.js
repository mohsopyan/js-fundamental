const ERROR_CODES = {
    INVALID_NAME: {
        code: "INVALID_NAME",
        message: "Name is required"
    },
    INVALID_AGE: {
        code: "INVALID_AGE",
        message: "Age must be at least 18"
    },
    INVALID_ACTIVE: {
        code: "INVALID_ACTIVE",
        message: "Active must be boolean"
    },
    INVALID_ROLE: {
        code: "INVALID_ROLE",
        message: "Invalid role"
    },

    INACTIVE_USER: {
        code: "INACTIVE_USER",
        message: "User is not active"
    },
}

module.exports = ERROR_CODES