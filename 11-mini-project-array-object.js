const users = [
    {id: 1, name: "Andi", age: 17, active: true},
    {id: 2, name: "Budi", age: 22, active: false},
    {id: 3, name: "Citra", age: 25, active: true},
    {id: 4, name: "Dewi", age: 15, active: true},
]

let hasil = users.filter(function(user) {
    return user.age >= 18 && user.active === true
})

console.log(hasil)