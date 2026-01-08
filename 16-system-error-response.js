let errorResponse = {
    success: false,
    code: "",
    message: "",
    field: "",
}

let successResponse = {
    success: true,
    data: null
}

function buildErrorResponse(code, message, field, errors = []) {
    return {
        ...errorResponse,
        code,
        message,
        field,
        errors
    }
}

function buildSuccessResponse(data) {
    return {
        ...successResponse,
        data
    }
}

function buildResponse(validationResult) {
    if(validationResult.valid) {
        return buildSuccessResponse(validationResult.user)
    }

    return buildErrorResponse(
        "VALIDATION_ERROR",
        "Invalid user data",
        null,
        validationResult.errors
    )
}

let sampleValid = {
    valid: true,
    user: {name: "Andi", age: 25}
}

let sampleInvalid = {
    valid: false,
    errors: ["age must be number"]
}

console.log(buildResponse(sampleValid))
console.log(buildResponse(sampleInvalid))