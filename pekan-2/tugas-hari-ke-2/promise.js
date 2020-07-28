//  Tulislah sebuah function dengan nama readBooksPromise yang me-return sebuah promise seperti berikut


function readBooksPromise (time, book) {
    console.log(`saya mulai membaca ${book.name}`)
    return new Promise( function (resolve, reject){
      setTimeout(function(){
        let sisaWaktu = time - book.timeSpent
        if(sisaWaktu >= 0 ){
            console.log(`saya sudah selesai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
            resolve(sisaWaktu)
        } else {
            var reason = new Error(`saya sudah tidak punya waktu untuk baca ${book.name}`)
            reject(reason)
        }
      }, book.timeSpent)
    })
  }
  
  module.exports = readBooksPromise
  