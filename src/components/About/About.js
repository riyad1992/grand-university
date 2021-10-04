import React from 'react';
import './About.css'
import image from '../../Images/about-img.jfif'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container'>
            <div className='row mt-5 about p-3 rounded-3'>
                <div className='col-md-6 col-12 mt-5'>
                    <h2>About Us</h2>
                    <p>Find the program format that works best for your schedule and get a step closer to achieving your goals. Find application processes for special groups, get to know GCU’s campus and discover resources offered to GCU students.</p>
                    <Link to='/about'><button className='btn customized-btn-bg text-white me-2'>Read More</button></Link>
                    <Link to='/service'><button className='btn customized-btn-bg text-white'>View Services</button></Link>
                </div>
                <div className='col-md-6 col-12'>
                    <img src={image} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default About;