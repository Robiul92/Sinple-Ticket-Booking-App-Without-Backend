import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="light" sticky="top">
        <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={50}  alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1">
      
          <Nav.Link className='text-white fw-bold' as={Link} to="Home">Home</Nav.Link>
          
            
            
            <Nav.Link className='text-white fw-bold' as={Link} to="booking">Booking</Nav.Link>
            
            
          </Nav>
          <Nav className='me-auto'>
            <Nav.Link className='text-white fw-bold' as={Link} to="about">About</Nav.Link>
            
            

            
           
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        
        </>

    
    );
};

export default Header;