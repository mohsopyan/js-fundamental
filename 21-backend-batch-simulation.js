const { canAccessSystem } = require("./22-access-decision")
const processUsers = require("./20-batch-user-processor")

let users = [
    {name: "Andi", age: 25, active: true},
    {name: "", age: 20, active: true},
    {name: "Budi", age: 30, active: false}
]

console.log(processUsers(users))