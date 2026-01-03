function cetakArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
let angka = [1, 2, 3, 4, 5, 6]
cetakArray(angka)

function cetakGenap(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0) {
            console.log(arr[i])
        }
    }
}
let data = [3, 4, 5, 6, 7, 8]
cetakGenap(data)

function ambilKelipatanTiga(arr) {
    let hasil = []

    for(let i = 0;i < arr.length; i++){
        if(arr[i] % 3 === 0) {
            hasil.push(arr[i])
        }
    }

    return hasil
}

let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let kelipatanTiga = ambilKelipatanTiga(data2)

console.log(kelipatanTiga)