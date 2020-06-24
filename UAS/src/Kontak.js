import React from 'react';
import logo from './logo.svg';
import './App.css';

function Kontak() {
    return (
<form>
    <div className="form-group">
    <h3 className="form-title">Ingin mendapatkan informasi promo terbaru? <br></br> subscribe sekarang!</h3>
    </div>
    <div className="form-group">
    <input type="email" className="input-name" placeholder="Masukan Email Anda" /> 
    <button type="submit" className="submit"><center>Submit</center></button>
    </div>  
       
    </form>       
    );
}

export default Kontak