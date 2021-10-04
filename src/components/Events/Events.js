import React from 'react';
import UseEffects from '../../hook/UseEffects';
import Event from '../Event/Event';

const Events = () => {
    const [events] = UseEffects('./event.json')
    return (
        <div className='container mt-4'>
            <h1 className='text-center'>UPcoming Events</h1>
            <hr className='w-25 m-auto mb-4 bg-danger' />
                {
                    events.map(event => <Event key={event.title} event={event}></Event>)
                }
        </div>
    );
};

export default Events;