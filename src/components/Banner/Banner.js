import React from 'react';
import './Banner.css';

export const Banner = ()=> {
    return <div className={"banner"}>
        <img src={require('../../images/Eventful.png')} alt={""} />
        <p>Your life events in a glimpse..</p>
    </div>;
};