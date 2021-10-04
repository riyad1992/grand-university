import React from 'react';
import './Header.css'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../Images/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='customized-background' variant="dark">
                <Container>
                    <img className='me-1' src={img} alt='' width='40px'/>
                    <Navbar.Brand to="/home">Grand UV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                            <Link className='header-link' to="/home">Home</Link>
                            <Link className='header-link' to="/about">About Us</Link>
                            <Link className='header-link' to="/service">Services</Link>
                            <Link className='header-link' to="/event">Events</Link>
                            <Link className='header-link ms-auto' to="/contact">Call Support: 00162584254</Link>
                            <Link className='header-link ms-auto' to="/contact">Email Support: info@granduv.com</Link>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;