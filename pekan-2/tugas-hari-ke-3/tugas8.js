// buatlah fungsi menggunakan arrow function luas lingkaran dan keliling lingkaran dengan arrow function 
// lalu gunakan let dan const di dalam soal ini

//Soal 1
const luasLingkaran = (r) => {
  const phi = 3.14;
  let jariJari = r;
  return phi * Math.pow(jariJari, 2);
};

const kelilingLingkaran = (r) => {
  const phi = 3.14;
  let jariJari = r;
  return 2 * phi * jariJari;
};

console.log(luasLingkaran(1));
console.log(kelilingLingkaran(1));

//Soal 2

// buatlah fungsi menambahkan kata di kalimat dan gunakan penambahan kata tersebut dengan template literal, 
// berikut ini kata kata yang mesti di tambahkan
// - saya
// - adalah
// - seorang
// - frontend
// - developer

let kalimat   = "";
let kataSatu  = "saya";
let kataDua   = "adalah";
let kataTiga  = "seorang";
let kataEmpat = "frontend";
let kataLima  = "developer";

const gabungKata = (kataSatu, kataDua, kataTiga, kataEmpat, kataLima) => {
         kalimat = `${kataSatu} ${kataDua} ${kataTiga} ${kataEmpat} ${kataLima}`;
         return kalimat;
};

console.log(gabungKata(kataSatu, kataDua, kataTiga, kataEmpat, kataLima)); // Gabung



//Soal 3
// buatlah class Book yang didalamnya terdapat 
// property name, totalPage, price. 



class Book {
  constructor(name, totalPage, price) {
    this._name = name;              // property
    this._totalPage = totalPage;
    this._price = price;
  }
}


// lalu buat class baru komik yang extends terhadap buku dan mempunyai property sendiri 
// yaitu isColorful yang isinya true atau false

class Comic extends Book {
  constructor(name, totalPage, price, isColorful) {
    super(name, totalPage, price);
    this._isColorful = isColorful;
  }
}

let buku = new Book("NKCT", 99, 60000); 
let komik = new Comic("Tahi Lalat", 145, 74000, true);

console.log(buku);
console.log(komik);
