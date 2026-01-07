function runRules(data, rules) {
    let errors = []

    for (let rule of rules) {
        let error = rule(data)
        if (error) {
            errors.push(error)
        }
    }

    return {
        valid: errors.length === 0,
        errors: errors
    }
}

const rules = [
        function checkName(user) {
            if (!user.name || user.name.trim() === "") {
                return "name tidak boleh kosong"
            }
            return null
        },

        function checkAge(user) {
            if(typeof user.age !== "number") {
                return "age harus number"
            }
            return null
        },

        function checkActive(user) {
            if(typeof user.active !== "boolean") {
                return "active harus boolean"
            }
            return null
        }
    ]

let userRusak = {
    name: "  ",
    age: "22",
    active: "yes"
}

let result = runRules(userRusak, rules)
console.log(result)