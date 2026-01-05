function filterKelipatan(arr, pembagi) {
    let hasil = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % pembagi === 0){
            hasil.push(arr[i])
        }
    }
    return hasil;
}

let data = [1, 2, 3, 5, 6]

console.log(filterKelipatan(data, 2))
console.log(filterKelipatan(data, 5))

function filterDenganAturan(arr, aturan) {
    let hasil = []

    for (let i = 0; i < arr.length; i++) {
        if(aturan(arr[i])) {
            hasil.push(arr[i])
        }
    }

    return hasil;
}

function isGenap(angka) {
    return angka % 2 === 0
}

let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(filterDenganAturan(data2, isGenap))

let data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let ganjil = data3.filter(function(angka) {
    return angka % 2 !== 0
})
console.log(ganjil)