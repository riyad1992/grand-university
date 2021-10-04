import React from 'react';
import './Service.css'

const Service = (props) => {
    const {titel, img, details, cost} = props.service
    return (
        <div>
            <div className="card mb-3 service">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title title">{titel.slice(0, 40)}</h5>
                            <p className="card-text description">{details.slice(0, 130)}</p>
                            <p className="card-text"><small className="text-muted">Semester Fee: ${cost}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;