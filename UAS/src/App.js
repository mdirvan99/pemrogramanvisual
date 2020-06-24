import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Review';
import Kontak from './Kontak';

function App() {
    return (
        <div className="Parentbox">
            <FotoProduk />
            <ProdukInfo name="Monster Burger" category="PROMO" />
            <ReviewItems />  
            <Kontak />            
            </div>              
    );
}

function FotoProduk() {
    return (
            <div className="Foto">
                <img src="burger.jpg" />
            </div>           
    );
}


function ProdukInfo (props){
    const {category, name} = props;
    return (
        <div>
            <div className="Deskripsi">
                <p className="Cate">{category}</p>
                <h1 className="Title">{name}</h1>
                <p className="Price">IDR 55.000</p>
                <p className="Info"> 
                Nikmati kelezatan burger jumbo dengan tumpukan 2 daging pilihan serta dilapisi dengan 2 keju dan bahan lainnya.
                Jangan sampai melewati promo terbatas ini!           
                </p>
                <a>Add to Cart </a>    
        </div>
        </div>
    );   
}



export default App;