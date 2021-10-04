import React from 'react';
import './Notice.css'

const Notice = (props) => {
    const {title, img, description} = props.notice
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 m-auto">
                        <img src={img} className="img-fluid  rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title title">{title}</h5>
                        <p className="card-text description">{description}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notice;