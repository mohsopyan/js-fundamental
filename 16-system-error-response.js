const  ERROR_CODES = {
    INVALID_NAME: "INVALID_NAME",
    INVALID_AGE: "INVALID_AGE",
    INVALID_ACTIVE: "INVALID_ACTIVE",
    INVALID_ROLE: "INVALID_ROLE",
}

const ERROR_MESSAGES = {
  INVALID_NAME: "Name is required",
  INVALID_AGE: "Age must be a number",
  INVALID_ACTIVE: "Active must be boolean",
  INVALID_ROLE: "Role is not allowed"
}


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

    const firstError = validationResult.errors[0]

    const message = ERROR_MESSAGES[firstError.code || 'Invalid request']

    return buildErrorResponse(
        firstError.code,
        message,
        firstError.field,
        validationResult.errors
    )
}

let sampleValid = {
    valid: true,
    user: {name: "Andi", age: 25}
}

let sampleInvalid = {
  valid: false,
  errors: [
    {
      code: "INVALID_AGE",
      field: "age",
      message: "age must be number"
    }
  ]
}


console.log(buildResponse(sampleValid))
console.log(buildResponse(sampleInvalid))