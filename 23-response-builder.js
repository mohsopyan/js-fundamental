function buildBackendResponse(result) {
    return {
        success: true,
        meta: {
            total: result.total,
            valid: result.validCount,
            denied: result.accessDeniedCount,
            invalid: result.invalidCount,
        },
        data: {
            validUsers: result.validUsers,
            accessDeniedUsers: result.accessDeniedUsers,
            invalidUsers: result.invalidUsers,
        },
    };
}

module.exports = buildBackendResponse;