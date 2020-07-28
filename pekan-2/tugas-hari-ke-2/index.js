
// Kita mempunyai tumpukan buku untuk dibaca. Setiap buku memiliki waktu yang dibutuhkan untuk 
// menghabiskan buku tersebut. 
// Sudah disediakan function readBooks yang menerima 
// tiga parameter: waktu, buku yang dibaca, dan sebuah callback. 

// index.js

var readBooks = require('./callback')  // panggil file callback

var books = [           
  { name: 'LOTR', timeSpent: 3000 },        // time spent = habis waktu
  { name: 'Fidas', timeSpent: 2000 },
  { name: 'Kalkulus', timeSpent: 4000 },
  { name: 'Komik', timeSpent: 1000 },
]


// Tulis code untuk memanggil function readBooks di sini

function tampilkan(time, indexBuku) {        // time, indexBuku
  readBooks(time, books[indexBuku], function (sisaWaktu) { // sisaWaktu
    if (sisaWaktu >= 0) {                   // kurang dari 0
      if (indexBuku + 1 < books.length) {     
        tampilkan(sisaWaktu, indexBuku + 1);  // tampil + 1
      } else {
        console.log('Waktu Habis')   // tampil
      }
    }
  })

}

tampilkan(10000, 0)  // interval 10000
