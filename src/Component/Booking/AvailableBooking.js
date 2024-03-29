import { format } from 'date-fns';
import React, { useState } from 'react';
import './AvailableBookings.css'
import AvailableSits from './AvailableSits';
import BookingModel from './BookingModel';
import SeateDake from './SeateDake/SeateDake'

const AvailableBooking = ({date}) => {
    const {booking, setBooking} = useState(null);
    const handelBookedSitData = (sitData) => {
        console.log(sitData)
    }
    
    return (
        <>
         <div>
            <h4 className='text-danger'>Available Bookings on {format(date, 'PP')}</h4>
        </div>
        {/* <AvailableSits setBooking={setBooking} /> */}

        {booking && <BookingModel booking={booking} ></BookingModel>}

        <SeateDake oNsitData={handelBookedSitData} ></SeateDake>
        
        </>
       
    );
};

export default AvailableBooking;