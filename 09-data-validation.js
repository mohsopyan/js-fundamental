let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function validasiData(arr, aturan) {
    let hasil = []

    for(let i = 0; i < arr.length; i++){
        if(aturan(arr[i])) {
            hasil.push(arr[i])
        }
    }

    return hasil;
}

function isGenap(angka){
    return angka % 2 === 0
}

let hasilGenap = validasiData(data, isGenap)
console.log(hasilGenap)