function hitungGenap(angka) {
  let total = 0;
  for (let i = 1; i <= angka; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}

console.log(hitungGenap(10));

function hitungGanjil(angka) {
    let total = 0;
    for (let i = 1; i <= angka; i++){
        if(i % 2 === 1) {
            total += i;
        }
    }
    return total;
}
console.log(hitungGanjil(10))

function hitungKelipatanTiga(angka) {
    let total= 0;
    for(let i = 1; i <= angka; i++) {
        if(i % 3 === 0) {
            total += i;
        }
    }
    return total;
}
console.log(hitungKelipatanTiga(10))