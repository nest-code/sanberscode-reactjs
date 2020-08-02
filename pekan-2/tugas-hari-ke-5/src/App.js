import React from 'react';
import './App.css'; // style css

function App() { // Form Buah
  return (
    <div className="App">
    <h1> Form Pembelian Buah </h1>
    <form>
        <table class="center">
            <tr>
                <td><b>Nama Pelanggan</b></td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td rowspan="5"><b>Daftar Item</b></td>
                <td><input type="checkbox" />Semangka</td>
            </tr>
            <tr>
                <td><input type="checkbox"/>Jeruk</td>
            </tr>
            <tr>
                <td><input type="checkbox"/>Nanas</td>
            </tr>
            <tr>
                <td><input type="checkbox" />Salak</td>
            </tr>
            <tr>
                <td><input type="checkbox" />Anggur</td>
            </tr>
            <tr>
                <td><button>Kirim</button></td>
            </tr>
        </table>
    </form>
</div>
  );
}

export default App;  
