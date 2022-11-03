import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Image from '../../../Sunderban/sundarban-tour-banner-1-1.jpg'
import Image1 from '../../../Sunderban/sunderban 2.jpg'
import Image2 from '../../../Sunderban/Sunderban.jpg'

const Banner = () => {

  const navigate = useNavigate();

  const navigatetoManage = () =>{
      navigate('/Booking')
  }
    
    return (
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <Button onClick={navigatetoManage} className='btn btn-danger text-center'>Book Now</Button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="Second slide"
        />

        <Carousel.Caption>
        <Button onClick={navigatetoManage} className='btn btn-danger text-center'>Book Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image}
          alt="Third slide"
        />

        <Carousel.Caption>
        <Button onClick={navigatetoManage} className='btn btn-danger text-center'>Book Now</Button>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
          

  
  


       
    );
};


export default Banner;