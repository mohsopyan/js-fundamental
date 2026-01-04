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