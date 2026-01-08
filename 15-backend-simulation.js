function runRules(users, rules) {
  let results = []

  if (!Array.isArray(users)) {
    users = [users]
  }

  for (let user of users) {
    let errors = []

    for (let rule of rules) {
      let error = rule(user)
      if (error) errors.push(error)
    }

    results.push({
      user,
      valid: errors.length === 0,
      errors
    })
  }

  return results
}

const advancedRules = [
  function checkName(user) {
    if (!user.name || user.name.trim() === "") {
      return "name tidak boleh kosong";
    }
    return null;
  },

  function checkAgeRange(user) {
    if (typeof user.age !== "number") {
      return "age harus number";
    }
    if (user.age < 18 || user.age > 60) {
      return "age harus diantara 18 dan 60";
    }
    return null;
  },

  function checkActive(user) {
    if (typeof user.active !== "boolean") {
      return "active harus boolean";
    }
    return null;
  },

  function checkRoleEnum(user) {
    const validRoles = ["admin", "user", "guest"]
    if (!validRoles.includes(user.role)) {
        return `role harus salah satu dari ${validRoles.join(", ")}`
    }
    return null
  }
];

function handleUserRequest(users) {

    let total = users.length
    let validationResults = runRules(users, advancedRules)

    let validUsers = []
    let invalidUsers = []

    for (let result of validationResults) {
        if(result.valid) {
            validUsers.push(result.user)
        } else {
            invalidUsers.push(result)
        }
    }

    return {
        success: true,
        total: total,
        validCount: validUsers.length,
        invalidCount: invalidUsers.length,
        validUsers: validUsers,
        invalidUsers: invalidUsers
    }
}

let users = [
  { name: "Andi", age: 25, active: true, role: "admin" },
  { name: "Budi", age: 17, active: false, role: "guest" },
  { name: "", age: 70, active: "yes", role: "finance" }
]

let response = handleUserRequest(users)
console.log(response)
