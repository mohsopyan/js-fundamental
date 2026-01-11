const validateUser = require("./18-user-validation")
const buildResponse = require("./16-system-error-response")

let user = {
    name: "",
    age: "25",
    active: true,
    role: "admin"
}

let validationResult = validateUser(user)
let response = buildResponse(validationResult)

console.log(response)