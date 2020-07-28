
// Kita mempunyai tumpukan buku untuk dibaca. Setiap buku memiliki waktu yang dibutuhkan untuk 
// menghabiskan buku tersebut. 
// Sudah disediakan function readBooks yang menerima 
// tiga parameter: waktu, buku yang dibaca, dan sebuah callback. 


// Buat function readbooks
function readBooks(time, book, callback) {
    console.log(`Saya membaca buku ${book.name}`)
    setTimeout(function () {
      let sisaWaktu = 0;
      if (time >= book.timeSpent) {  // timeSpent
        sisaWaktu = time - book.timeSpent
        console.log(`Saya sudah membaca buku : ${book.name}, Sisa waktu saya ${sisaWaktu}.`)
        callback(sisaWaktu)
      } else {
        console.log('Waktu saya habis')
        callback(time)
      }
    }, book.timeSpent)
  
  }
  
  module.exports = readBooks  

  // ReadBook adalah variable dan export merupakan nama pemanggilan
  