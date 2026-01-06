let rawData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function dataProcessor(data, rule, transform) {
    let hasil = []

    for (let i = 0; i < data.length; i++) {
        if(rule(data[i])) {
            hasil.push(transform(data[i]))
        }
    }

    return hasil
}

function isGenap(angka) {
    return angka % 2 === 0
}

function kaliSepuluh(angka) {
    return angka * 10
}

let hasil = dataProcessor(rawData, isGenap, kaliSepuluh)
console.log(hasil)