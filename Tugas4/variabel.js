const nama = 'Crystalin'
// const tidak bisa diubah
// nama = 'Aqua'
// console.log(nama)

let harga = 3000
harga = 2500
// console.log(harga)

// console.log('123' + '123')
// console.log(123 + 123)
const dijual = false // false
const ongkir = null // undefined

// console.log(`Barang: ${nama} dengan harga: ${harga}, ${dijual ? 'Dijual' : 'Tidak Dijual'}`)

const barang = {
    id: 1,
    nama: 'Aqua',
    harga: 900,
    'harga lama': 800,
}

// console.log(barang.nama)
// console.log(barang['harga lama'])
// console.log(barang)

const hobi = ['membaca', 'menulis', 'menari']
// console.log(hobi[2])

const orang = {
    nama: 'Cahya',
    hobi: ['baca', 'tulis', { jenis: 'tari', details: ['piring', 'reog'] }],
    alamat: {
        desa: 'sengonagung',
        kecamatan: 'purwosari'
    }
}
// output reog
console.log(orang.hobi[2].details[1])
