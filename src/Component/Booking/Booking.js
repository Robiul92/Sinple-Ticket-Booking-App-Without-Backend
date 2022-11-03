import React from 'react';
import AvailableBooking from './AvailableBooking';
import BookingBanner from './BookingBanner/BookingBanner'

const Booking = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
    <BookingBanner date={date} setDate={setDate}></BookingBanner>
    <AvailableBooking date={date} ></AvailableBooking>
        </div>
    );
};

export default Booking;