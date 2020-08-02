// Soal 1
// ubahlah array di bawah ini menjadi object dengan property nama, jenis kelamin, hobi dan tahun lahir

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta = {
    nama : "asep",
    jk  : "laki-laki",
    hobi : "baca buku",
    tahunLahir : 1992
}
console.log(objDaftarPeserta)
console.log(arrayDaftarPeserta)

 
// Soal 2
// anda diberikan data-data buah seperti di bawah ini
// uraikan data tersebut menjadi array of object dan munculkan data pertama

// 1.nama: strawberry
//   warna: merah
//   ada bijinya: tidak
//   harga: 9000 
// 2.nama: jeruk
//   warna: oranye
//   ada bijinya: ada
//   harga: 8000
// 3.nama: Semangka
//   warna: Hijau & Merah
//   ada bijinya: ada
//   harga: 10000
// 4.nama: Pisang
//   warna: Kuning
//   ada bijinya: tidak
//   harga: 5000


var objDaftarBuah = [
{
    namaBuah : "strawberry",
    warna : "merah",
    adaBiji : "tidak",
    harga : 9000
},
{
    namaBuah : "jeruk",
    warna : "orange",
    adaBiji : "ada",
    harga : 8000
},
{
    namaBuah : "semangka",
    warna : "Hijau & Merah",
    adaBiji : "ada",
    harga : 10000
},
{
    namaBuah : "pisang",
    warna : "kuning",
    adaBiji : "ada",
    harga : 5000
}
]
console.log(objDaftarBuah[0]);

// Soal 3
// var dataFilm = []
// buatlah fungsi untuk menambahkan dataFilm tersebut yang itemnya object adalah object dengan property nama, durasi , genre, tahun

var dataFilm = [];

function addFilm(nama, durasi, genre, tahun){
    var obj = {
        objNama: nama,
        objDurasi: durasi,
        objGenre: genre,
        objTahun: tahun,
    }
    return dataFilm.push(obj);
}

addFilm("The Shawshank Redemption", "142 menit", "Drama", 1994);
addFilm("Nanti Kita Cerita Tentang Hari Ini", "121 menit", "Drama", 2020);
addFilm("Bali: Beats of Paradise", "56 menit", "Dokumenter/Drama", 2018);


console.log(dataFilm);

// soal 4
// Terdapat sebuah class Animal yang memiliki sebuah constructor name, default property band= 4 dan cold_blooded = false.


//Soal 4 release 0

class Animal {  // kalpital di huruf pertama
    constructor(name) { // dapat memiliki fungsi/sifat/nama
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get gtname(){
        return this.name;
    }
    get gtlegs(){
        return this.legs;
    }
    get gtcold_blooded(){
        return this.cold_blooded;
    }
}

var sheep = new Animal("shaun"); 

// console.log(sheep.name); // "shaun"
// console.log(sheep.legs); // 4
// console.log(sheep.cold_blooded); // false


console.log(sheep.gtname);
console.log(sheep.gtlegs); // memanggil setter, mengubah Ford menjadi Volvo
console.log(sheep.gtcold_blooded);

//Soal 4 release 1

class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump(){
        console.log("hop hop");
    }
}

class Ape extends Animal {
    constructor(name) { // construct
        super(name);
        this.legs = 2;
    }
    yell(){
        console.log("Auooo");
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();
var kodok = new Frog("buduk");
kodok.jump() ;



// soal 5
// Terdapat sebuah class dengan nama Clock yang ditulis seperti penulisan pada function, ubahlah fungsi tersebut menjadi class dan pastikan fungsi tersebut tetap berjalan dengan baik. Jalankan fungsi di terminal/console Anda untuk melihat hasilnya. (tekan tombol Ctrl + C pada terminal untuk menghentikan method clock.start())

class Clock {
    timer;
    constructor({template}) {
        this.template = template;
    }

    render() {
        var date = new Date();
        var hours = date.getHours();
        
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template.replace('h', hours).replace('m', mins).replace('s', secs); //replace

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(()=> this.render(), 1000) //interval
    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();  
