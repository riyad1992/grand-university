import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='text-center m-5 p-5'>
            <h2>Thank you to Contact With us</h2>
            <p>Contact with call: 0016665458</p>
            <p>Contact with email: info@granduv.com</p>
            <Link to='/home'><button className='btn customized-btn-bg'>Back Home</button></Link>
        </div>
    );
};

export default Contact;