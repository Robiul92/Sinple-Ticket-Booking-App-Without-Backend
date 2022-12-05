import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const BookingModel = ( updateDetails) => {
  // const {sitNo, price}= setData
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const ref = useRef(null);




  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }
    return (
<>
      

      <Modal show={show} onHide={handleClose}
      ref={ref}
      
     
      onRequestClose={closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
};

export default BookingModel;