// Lakukan hal yang sama dengan soal no.1, habiskan waktu selama 10000 ms (10 detik) 
// untuk membaca semua buku dalam array books.!

const readBooksPromise = require('./promise')

var books = [
  { name: 'LOTR', timeSpent: 3000 },
  { name: 'Fidas', timeSpent: 2000 },
  { name: 'Kalkulus', timeSpent: 4000 },
  { name: 'Komik', timeSpent: 1000 },
]

function printReadBooks(time, index) {  // time, index
  readBooksPromise(time, books[index])  
    .then(function (sisaWaktu) { // sisaWaktu
      console.log(sisaWaktu)
      if (sisaWaktu >= 0) {
        if (index + 1 < books.length) {
          printReadBooks(sisaWaktu, index + 1); // sisaWaktu
        }
      }
    })
    .catch(function (error) {
      console.log(error.message);
    })
}

printReadBooks(10000, 0) // interval 10 detik
