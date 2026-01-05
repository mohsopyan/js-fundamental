let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let genap = data.filter(function(angka) {
    return angka % 2 === 0
})

let genapKaliSepuluh = genap.map(function(angka) {
    return angka * 10
})
console.log(genapKaliSepuluh)