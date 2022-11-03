
import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';


const BookingData = ({sit, setSitData}) => {
  
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log(sit.sitNo)
    return (
        <div>
<div className='text-center'>
          <Modal.Dialog id='booing-modal ' show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title ><h2 className='text-center'>Booked Sit No: {sit.sitNo}</h2></Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <p>Ticket Price {sit.price} TK</p>
          </Modal.Body>
          
    
          <form >
            <div className='d-flex justify-content-around'>
            <input type="email" placeholder='Enter Your Email' required="required"/>
          <input type="email" placeholder='Enter Your Phone Number' required="required" />
          <input
          
          name="name"
          type="text"
          placeholder="Name"
          
          required="required"
          
        ></input>
            </div>
      
      <div className=" p-2">
      <div className="">
          <label className="">Gender</label>
          <div>
            <input
              
              type="radio"
              id="male"
              name="gender"
              value="male"
              required="required"
            ></input>
            <label for="male">Male</label>
            <input
              
              type="radio"
              id="female"
              name="gender"
              value="female"
              required="required"
            ></input>
            <label for="female">Female</label>
          </div>
        </div>
       
       
      </div>
      <div className="p-2">
        
        <div>
          
          <input
           
            name="age"
            type="number"
            placeholder="Age"
            
            required="required"
            
          ></input>
        </div>
      </div>
      <button
        type="submit"
        className="bg-danger p-2 rounded mt-2"
        
      >Submit</button>
    </form>
        </Modal.Dialog>

        </div>
                           
             {/* <>
{sit.sitNo.length < 2 ?
  <Card className={`border mt-2 text-center`}>
                      <p className="mt-2">Slected Sits: {sit.sitNo} </p>
                       <p>Ticket Price: {sit.price} Tk</p>
                       
                       
                       
                     </Card>
 : 
 
 <Card className={`border mt-2 text-center`}>
                      <p className="mt-2">Slected Sits: {sit.sitNo}</p>
                       <p>Ticket Price: {sit.price} Tk</p>
                       
                       
                       
                     </Card>
                     
                     }
                
                     
                     

                       

                      
                   
                 </> */}
                
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