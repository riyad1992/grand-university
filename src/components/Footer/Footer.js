import React from 'react';

const Footer = () => {
    return (
        <div className='customized-background'>
            <div className='container'>
                <div className='row p-4'>
                    <div className='col-12 col-md-3 m-auto'>
                        <h3 className='text-white'>DO YOU WANT TO BE A INSTRUCTOR?</h3>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h3 className='text-white'>LOOKING FOR OPPOUTUNITY?</h3>
                        <p className='text-white'>Psychology  Counseling, Business , Management, Teaching , School Administration, Nursing , Health Care, Criminal Justice, Government , Public Administration, Engineering , Technology, Medical Studies , Sciences, Language , Communications, Theology , Ministry, Performing Arts , Digital Arts</p>
                    </div>
                    <div className='col-12 m-auto col-md-3'>
                        <button className='btn customized-btn-bg text-white'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;