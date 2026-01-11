function buildResponse(result) {
    if(result.valid === true) {
        // CASE: VALID
        return {
            success: true,
            data: result.data
        }
    }

    // CASE: INVALID
    return {
        success: false,
        errors: result.errors.map(err => ({
            code: err.code,
            message: err.message,
            field: err.field
        }))
    }
}

module.exports = buildResponse