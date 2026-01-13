const { decideUserAccess } = require("./22-access-decision")
const processUsers = require("./20-batch-user-processor")
const buildBackendResponse = require("./23-response-builder")

let users = [
    {name: "Andi", age: 25, active: true},
    {name: "", age: 20, active: true},
    {name: "Budi", age: 30, active: false}
]

const result = processUsers(users);
const response = buildBackendResponse(result);
console.log(response)