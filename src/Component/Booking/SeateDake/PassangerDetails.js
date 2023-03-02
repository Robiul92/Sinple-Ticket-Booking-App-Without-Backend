import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';



const PassangerDetails = ({setPassengerData}) => {
    const Navagate = useNavigate();
    const NavagateToTicketDetails = () => {
      Navagate ('/BookedTicket')
    };

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPassengerData(prevState => ({...prevState, [name]: value}));
    }
  
    const { register, handleSubmit } = useForm();
      
    const onSubmit = data => {
      setPassengerData(data);
    NavagateToTicketDetails();
    console.log(data.name);
  };
    
  
    
  
      return (
        <div className='w-50 mx-auto'>
        <h1 className='text-center text-danger'>Passanger Details</h1>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-3' placeholder='Name'{...register("name", { required: true, maxLength: 20 })} />
            
            <input className='mb-3'  placeholder='Email'type="email" {...register("email")} />
            <div className="text-center">
            <label className=""><b>Gender</b></label>
            <div className='d-flex flex-column m-1 justify-content-start align-items-start'>
              <div >
              <input
                className='m-1'
                type="radio"
                id="male"
                name="gender"
                value="male"
                required="required"
                {...register("gender")}
              ></input>
              <label htmlFor="male">Male</label>
              </div>
              <div>
              <input
                className='m-1'
                type="radio"
                
                
                {...register("gender")}
              />
              <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
        
            <input className='mb-3'  placeholder='Age'type="number" {...register("age")} />
            
            {/* <input  className='mb-3' type="Submit" /> */}
            <Button type="submit" className="w-100" >PROCEED TO BOOK</Button>
        </form>
    </div>
  
      );
};

export default PassangerDetails;

