// function hitung(barang) {
//     dijual = barang.harga > 3000
//     return dijual 
// }
const hitung = i => i.harga > 3000

const barang = { nama: 'Crystalin', qty: 3, harga: 5_200 }
barang.harga = 2_900
const hasil = hitung(barang)
console.log(hasil)
