// soal 1
// gabungkan variabel-variabel tersebut agar menghasilkan output
// saya Senang belajar JAVASCRIPT

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var upperkataKeempat  = kataKeempat.toUpperCase();
var kalimatnya = kataPertama + " " +kataKedua+ " "+kataKetiga+ " "+upperkataKeempat;
console.log(kalimatnya);


// soal 2
// ubah lah variabel diatas ke dalam integer dan lakukan jumlahkan semua variabel dan tampilkan dalam output

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

kataPertamaBaru = parseInt(kataPertama);
kataKeduaBaru = parseInt(kataKedua);
kataKetigaBaru = parseInt(kataKetiga);
kataKeempatBaru = parseInt(kataKeempat);
console.log(kataPertamaBaru + kataKeduaBaru + kataKetigaBaru + kataKeempatBaru);


// soal 3
// potongan string

var kalimat = 'wah javascript itu keren sekali'; 
var kataPertama = kalimat.substring(0, 3); 
var kataKedua   = kalimat.substring(4, 14); 
var kataKetiga  = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima  = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);


// Soal 4
// nilai > 80 indeksnya A
// nilai > 70 dan nilai < 80 indeksnya B
// nilai > 60 dan nilai < 70 indeksnya c
// nilai > 50 dan nilai < 60 indeksnya D
// nilai < 50 indeksnya E

var nilai = 77 ;
if (nilai >= 80){
    console.log("Nilai : "+nilai + " indeksnya : A");
}else if(nilai >= 70 && nilai <80 ){
    console.log("Nilai : "+nilai + " indeksnya : B");
}else if(nilai >= 60 && nilai <70){
    console.log("Nilai : "+nilai + " indeksnya : C");
}else if(nilai >= 50 && nilai <60){
    console.log("Nilai : "+nilai + " indeksnya : D");
}else if(nilai < 50) {
    console.log("Nilai :"+nilai +" indeksnya : E");
}


// Soal 5
//  Swith Case : isi di sesuaikan dengan tanggal lahir masing-masing

var tanggal = 18;
var bulan = 7;
var tahun = 1996;

switch (bulan) {
    case 1: {  console.log(tanggal + " Januari " + tahun);}
    break;

    case 2: {  console.log(tanggal + " Februari " + tahun);}
    break;

    case 3: {  console.log(tanggal + " Maret " + tahun);}
    break;

    case 4: {  console.log(tanggal + " April " + tahun);}
    break;

    case 5: {  console.log(tanggal + " Mei " + tahun);}
    break;

    case 6: {  console.log(tanggal + " Juni " + tahun);}
    break;

    case 7: {  console.log(tanggal + " Juli " + tahun);}
    break;

    case 8: {  console.log(tanggal + " Agustus " + tahun);}
    break;

    case 9: {  console.log(tanggal + " September " + tahun);}
    break;

    case 10: {  console.log(tanggal + " Oktober " + tahun);}
    break;

    case 11: {  console.log(tanggal + " November " + tahun);}
    break;

    case 12: {  console.log(tanggal + " Desember " + tahun);}
    break;
}
