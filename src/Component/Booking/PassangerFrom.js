import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";

// const [formData, setFormData] = useState({
//     name: "",
//     gender: "",
//     age: "",
//   });
 
  // const buttonClick = useRef();

  

  
const PassangerFrom = () => {
  const { register, handleSubmit } = useForm();
    
  const onSubmit = data => console.log(data);

  

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
            <label for="male">Male</label>
            </div>
            <div>
            <input
              className='m-1'
              type="radio"
              
              
              {...register("gender")}
            />
            <label for="female">Female</label>
            </div>
          </div>
        </div>
      
          <input className='mb-3'  placeholder='Age'type="number" {...register("age")} />
          
          <input className='mb-3' type="Submit" />
      </form>
  </div>

    );
};

export default PassangerFrom;