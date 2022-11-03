import React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const BookingBanner = ({date, setDate}) => {
    
    return (
        <div className='d-flex justify-content-center'> 
            <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
      
    />
        </div>
    );
};

export default BookingBanner;