function validateUser(user) {
    let errors = []

    if(!user.name || user.name.trim() === "") {
        errors.push("name tidak boleh kosong")
    }

    if(typeof user.age !== "number") {
        errors.push("age harus number")
    }

    if(typeof user.active !== "boolean") {
        errors.push("active harus boolean")
    }

    return {
        valid: errors.length === 0,
        errors: errors
    }
}

let userRusak = {
    name: "   ",
    age: "22",
    active: "yes"
}

let hasil = validateUser(userRusak)
console.log(hasil)