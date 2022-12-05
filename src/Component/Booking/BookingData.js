
import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';


const BookingData = ({ sit, setSitData }) => {

  const [show, setShow] = useState(false);
  const [booking, setBooking] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  //   setBooking(prevState => {
  //     console.log(  setBooking) 
  //     const newState = prevState.map(obj => {

  //         if (obj.sitNo === sit.sitNo) {
  //             return {
  //                 ...obj,
  //                 isBooked: !obj.isBooked,

  //             };

  //         }
  //         return obj;

  //     });



  //     return newState;
  // });

  return (
    <div>
      {/* <div className='text-center'>
          <Modal.Dialog id='booing-modal ' show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title ><h2 className='text-center'>Booked Sit No: {sit.sitNo}</h2></Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <p>Ticket Price {sit.price} TK</p>
          </Modal.Body>
          
    
          
        </Modal.Dialog>

        </div> */}

      <>
        {sit.sitNo ?
          <Card className={`border mt-2 text-center`}>
            <p className="mt-2">Slected Sits: {sit.sitNo} </p>
            <p>Ticket Price: {sit.price} Tk</p>



          </Card>
          :

          <Card className={`border mt-2 text-center`}>
            <p className="mt-2">Slected : {sit.sitNo}</p>
            <p>Ticket Price: {sit.price} Tk</p>



          </Card>

        }








      </>

      {/* <label
                 for="booing-modal"
                 onClick={()=>setSitData(sit)}
                 className="bg-danger p-2 rounded mt-2"
                 >
                 Confrom Booking   
                 </label> */}
    </div>
  );
};

export default BookingData;