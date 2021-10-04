import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Images/notFound.jfif'

const NotFound = () => {
    return (
        <div className='text-center mt-5'>
            <div>
                <img className='w-50 rounded-3' src={notFound} alt=''/>
                <p className=''>Sorry the page you'r looking for doesn't exist. If you think Somethink is broken, report a problem.</p>
                <Link to='/home'><button className='btn customized-btn-bg mb-5'>Back Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;