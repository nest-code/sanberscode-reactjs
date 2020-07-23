// Soal 1
console.log('LOOPING PERTAMA');

var i = 1;                                               // nilai variable = 1 
while(i <= 20) {
    if(i %2==0) {                                        // Genap - Jika hasil bagi = 0
        console.log(i + ' I love Coding');
    }
    i++;                                                 // tambah nilai i +
}

console.log('LOPING KEDUA');
var i= 20;  
while (i > 0){                                          // jika i kurang dari 0
    if (i %2==0){                                       //sisa bagi 2 sama dengan 0
      console.log(i + ' I will become a frontend developer');
    }
    i--;                                                // kurangi nilai i -
}

// soal 2

for (var angka = 1; angka <= 20; angka++) {              // angka = 1
    if (angka % 2 === 0) {                               // jika hasil bagi 2 sama dengan 0
        console.log(angka + ' - Berkualitas');
    }else if (angka % 2 !== 0) {                         // jika hasil bagi 2 tidak sama dengan 0
        if (angka % 3 === 0) {                           // jika hasil bagi 3 sama dengan 0
            console.log(angka + ' - I Love Coding');
        }else {
            console.log(angka + ' - Santai');
        }
    }
}

// soal 3

var hastag = " ";                       
for (var i = 1; i <= 7; i++) {
    hastag = '';                       // awal 
    for (var j = 1; j <= i; j++) {
        hastag = hastag + "#";          // tambah hastag
    }
    console.log(hastag);                // cetak hastag
}



//soal 4

var kalimat = "saya sangat senang banana belajar javascript";     // string 
var ar = kalimat.split(" ");                                      // memecah sebuah string sehingga menjadi sebuah array - spasi
console.log(ar);


// Soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();                      // ascending (dari rendah ke tinggi)      
console.log(daftarBuah);                // urutan array

console.log(daftarBuah.join("\n"));     // mengubah sebuah array menjadi string   /n : adalah enter