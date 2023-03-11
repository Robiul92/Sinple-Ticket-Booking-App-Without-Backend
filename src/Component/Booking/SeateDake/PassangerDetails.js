import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const PassangerDetails = () => {
  const [passengerData, setPassengerData] = useState({});

  const circularRefs = new Set();

  useEffect(() => {
    const storedPassengerData = localStorage.getItem('passengerData');
    if (storedPassengerData) {
      setPassengerData(JSON.parse(storedPassengerData));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('passengerData', JSON.stringify(passengerData, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (circularRefs.has(value)) {
          return "null";
        }
        circularRefs.add(value);
      }
      return value;
    }));
  }, [passengerData]);
  

  const navigate = useNavigate();
  const navigateToTicketDetails = () => {
    navigate('/BookedTicket');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPassengerData(prevState => ({...prevState, [name]: value}));
  };
  
  const { register, handleSubmit } = useForm();
      
  const onSubmit = data => {
     // Set the passenger data into the state
    setPassengerData(data);
    
    // Save the passenger data into the local storage
    localStorage.setItem('passengerData', JSON.stringify(data));
    
    // Navigate to the ticket details page
    navigateToTicketDetails();
    
    console.log(data.name);
  };
    
  return (
    <div className='w-50 mx-auto'>
      <h1 className='text-center text-danger'>Passanger Details</h1>
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} defaultValue={passengerData.name} />
        <input className='mb-3' placeholder='Email' type="email" {...register("email")} defaultValue={passengerData.email} />
        <div className="text-center">
          <label className=""><b>Gender</b></label>
          <div className='d-flex flex-column m-1 justify-content-start align-items-start'>
            <div>
              <input
                className='m-1'
                type="radio"
                id="male"
                name="gender"
                value="male"
                required="required"
                {...register("gender")}
                defaultChecked={passengerData.gender === "male"}
              ></input>
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                className='m-1'
                type="radio"
                name="gender"
                value="female"
                {...register("gender")}
                defaultChecked={passengerData.gender === "female"}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <input className='mb-3' placeholder='Age' type="number" {...register("age")} defaultValue={passengerData.age} />
        <Button type="submit" className="w-100">PROCEED TO BOOK</Button>
      </form>
    </div>
  );
};

export default PassangerDetails;
