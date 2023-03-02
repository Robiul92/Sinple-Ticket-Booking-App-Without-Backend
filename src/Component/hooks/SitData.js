// import { useEffect, useState } from "react"

// const ShowSitData = () => {
//     const [booking, setBooking] = useState([]);


//     useEffect(() => {
//         fetch('seates.json')
//           .then(res => res.json())
//           .then(data => setBooking(data)
//           );
    
//       }, []);


//       const booked = booking.filter((sit) => sit.isBooked === true);

//   const sitNo = booked.map(sit => <span> {sit.sitNo}, </span>)

//   const price = booked.reduce((acc, item) => {
//     return acc + item.price;
//   }, 0);


//     return {booking, setBooking, sitNo, price};
    
// };

// export default ShowSitData;


import { useEffect, useState } from "react";

const useSitData = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch('seates.json')
      .then(res => res.json())
      .then(data => setBooking(data));
  }, []);

  const booked = booking.filter((sit) => sit.isBooked === true);
  const sitNo = booked.map(sit => <span key={sit.id}> {sit.sitNo}, </span>);
  const price = booked.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return { booking, setBooking, sitNo, price };
};

export default useSitData;