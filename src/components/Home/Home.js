import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseEffects from '../../hook/UseEffects';
import About from '../About/About';
import Event from '../Event/Event';
import Notice from '../Notice/Notice';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    //notice data fatce useing by customized hook
    const [notices] = UseEffects('./notice.json')
    //service data fatce useing by customized hook
    const [services] = UseEffects('./service.json')
    //events data fatce useing by customized hook
    const [events] = UseEffects('./event.json')
   
    return (
        <div>
            {/* 
            main section header part 
            */}
            <div className='home-bg-img p-5'>
                <div className='w-50 p-4 bg-white'>
                    <h4 className='title-color font-size'>Find Your Purpose</h4>
                    <h1 className='font-size text-primary text-bold '>Online Classes Starting Every Thursday
                    Next Start Date in 4 Days</h1>
                    <Link to='/service'><Button className='border border-0 customized-btn-bg m-2 rounded-3 text-white px-4 py-1 font-size' variant="danger" >View Our Service</Button></Link>
                </div>  
            </div>
            {/*
             University notice section
             */}
            <div className='container mt-5'>
                <h1 className='text-center'>University Notice</h1>
                <hr className='w-25 m-auto mb-4 bg-danger' />
                <div className="row row-cols-1 row-cols-md-4 g-2">
                    {
                        notices.map(notice => <Notice key={notice.title} notice={notice}></Notice>)
                    }
                </div>
            </div>
            {/* 
            service section 
             */}
            <div className='customized-background'>
                <h1 className='text-center text-white'>SEARCH OUR SERVICE</h1>
                <hr className='w-25 m-auto mb-4 bg-danger'/>
                <InputGroup className="mb-3 w-50 m-auto">
                    <FormControl placeholder='search our service' aria-label="" />
                    <Button
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-2"
                    align="end"
                    className='px-4 customized-btn-bg text-white border border-0'
                    >Search</Button>
                </InputGroup>
                <div className='container'>
                    <Row xs={1} md={2} className="g-4">
                        {
                            services.slice(0, 4).map(service => <Service key={service.titel} service={service}></Service>)
                        }
                    </Row>
                </div>
            </div>
            {/* 
            about section 
             */}
            <div className='container'>
                <About></About>
            </div>
            {/* 
            event section 
             */}
            <div className='container mt-4'>
                <h1 className='text-center'>UPcoming Event</h1>
                <hr className='w-25 m-auto mb-4 bg-danger' />
                    {
                        events.slice(0, 2).map(event => <Event key={event.title} event={event}></Event>)
                    }
            </div>
        </div>
    );
};

export default Home;