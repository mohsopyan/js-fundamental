function buildResponse(result) {
    if(result.valid) {
        // CASE: VALID
        return {
            success: true,
            data: result.data
        }
    }

    // CASE: INVALID
    return {
        success: false,
        errors: result.errors,
    };
}

module.exports = buildResponse