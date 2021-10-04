import React from 'react';
import './Event.css'

const Event = (props) => {
    const {title, img, body} = props.event
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-3 event-img">
                    <img src={img} className="rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{body}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;