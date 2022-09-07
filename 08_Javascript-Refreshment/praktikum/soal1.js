let a = 5;
let b = "kampus merdeka";
let nama = "Budi";
let terdaftar = true;
let lengkapArr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
  }

  return setTimeout(() => {
    console.log("perkenalkan nama saya " + nama + " nomor urut " + a + " sekarang sedang mengikuti " + b + " berasal dari " + asal), 1000;
  });
}

a = b;
// nama = b;

perkenalan();
console.log("array = " + lengkapArr[2]);
// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
