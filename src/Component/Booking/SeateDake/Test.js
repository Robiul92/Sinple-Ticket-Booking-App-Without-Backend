import React from 'react';
import SeateDake from './SeateDake';

const Test = () => {
    const {sitNo, price} = SeateDake();
    console.log(price);
    return (
        <div>
            {/* <h1>{sitNo} </h1> */}
        </div>
    );
};

export default Test;