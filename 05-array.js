let angka = [2, 4, 6, 8, 10]
for ( let i = 0; i < angka.length; i++) {
    console.log(angka[i])
}

let angka2 = [1, 2, 3, 4, 5, 6]
for(let i = 0; i < angka2.length; i++){
    if(angka2[i] % 2 !== 0) {
        console.log(angka2[i])
    }
}

let angka3 = [10, 9, 3, 2, 8, 15]
for(let i = 0; i < angka3.length; i++) {
    if(angka3[i] % 3 === 0) {
        console.log(angka3[i])
    }
}