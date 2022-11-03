import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const BookingModel = ({setData}) => {
  const {sitNo, price}= setData
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
     
        <div className='text-center'>
          <Modal.Dialog id='booing-modal ' show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title ><h2 className='text-center'>Booked Sit No: {sitNo}</h2></Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <p>{price}</p>
          </Modal.Body>
          <input type="email" placeholder='Enter Your Email' />
          <input type="email" placeholder='Enter Your Phone Number' />
    
          
        </Modal.Dialog>

        </div>


        
      
    );
};

export default BookingModel;