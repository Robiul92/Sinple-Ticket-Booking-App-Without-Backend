import React from 'react';

const Practic = () => {

    let sits = [
         {key: '5', sitNo: 'A5', price: 266, isBooked: true},
         {key: '6', sitNo: 'A6', price: 266, isBooked: true},
        {key: '7', sitNo: 'A7', price: 266, isBooked: true},
        {key: '8', sitNo: 'A8', price: 266, isBooked: true}
        ]
        
        let sit = sits.find(({sitNo}) => sitNo > 0 );
        
        
        
    return (
        <div>
            <h1>{sit}</h1>
        </div>
    );
};

export default Practic;