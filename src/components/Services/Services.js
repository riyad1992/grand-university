import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import UseEffects from '../../hook/UseEffects';
import Service from '../Service/Service';

const Services = () => {
    const [services] = UseEffects('./service.json')
    return (
        <div className=' mt-5'>
                <h1 className='text-center'>SEARCH OUR SERVICE</h1>
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
                            services.map(service => <Service key={service.titel} service={service}></Service>)
                        }
                    </Row>
                </div>
            </div>
    );
};

export default Services;