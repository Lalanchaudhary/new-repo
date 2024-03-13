import React from 'react';
import '../css/Navbar.css'
import Mens from '../Views/Mens';
import { Navbar, Nav, Form, FormControl, Container,Image, } from 'react-bootstrap';
function CustomNavbar() {
  return (
    <>
<Navbar bg="light" expand="lg" className='navbar1'>
  <Container>
  <Navbar.Brand href="#home"  className='mr-4 mb-2'><Image src='https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg' height={20}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ml-4">
      <Nav.Link href='#home' className='text-dark'>Men</Nav.Link>
      <Nav.Link href="#link"  className='text-dark'>Women</Nav.Link>
      <Nav.Link href="#link" className='text-dark'>Mobile Cover</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Form className='d-flex align-items-center'>
   <FormControl  type='text' className='p-2 pl-4'  placeholder='Search' inline></FormControl>
   <div className='icons'>
   <Nav.Link className='icons2'  href='#login'>Login</Nav.Link>
   </div>
  </Form>
  </Container>
</Navbar>

<Container className='pb-4 pt-2' fluid>
  <Container className='d-flex justify-content-between'>
      <Nav.Link href={Mens.js}  className='text-dark fs'>MEN</Nav.Link>
      <Nav.Link href="#link"  className='text-dark fs'>WOMEN</Nav.Link>
      <Nav.Link href="#link" className='text-dark fs'>ACCESSORIES</Nav.Link>
      <Nav.Link href="#home" className='text-dark fs'>SHOP NOW</Nav.Link>
      <Nav.Link href="#link"  className='text-dark fs'>HEAVY DUTY</Nav.Link>
      <Nav.Link href="#link" className='text-dark fs'>BEWAKOOF AIR</Nav.Link>
      <Nav.Link href="#home" className='text-dark fs'>OFFICIAL MERCH</Nav.Link>
      <Nav.Link href="#link"  className='text-dark fs'>PLUS SIZE</Nav.Link>
  </Container>
</Container>
</>
  );
}

export default CustomNavbar;
