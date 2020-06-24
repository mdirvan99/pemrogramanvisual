import React from 'react';
import logo from './logo.svg';
import './App.css';

function Review() {
    const users = [
        {
            "id": 1,
            "name": "Axton",
            "review": "Harganya sebanding dengan kualitas",
            "photo":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            "id": 2,
            "name": "Alice",
            "review": "Rasa burgernya beda dari yang lainnya",
            "photo":"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            "id": 3,
            "name": "Robert",
            "review": "Puas banget makan burgernya!",
            "photo":"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

        }
    ];
    const listReview = users.map((itemReview) =>
    <div className="Item">
                    <img src={itemReview.photo} />
                    <div className="User" >
                        <h3>{itemReview.name}</h3>
                        <p>{itemReview.review}</p>
                    </div>
                </div> 
    );
    return (
    <div className="Review-box">
                <h2>Review</h2>
                {listReview}
                </div>
    );     
};
    
export default Review