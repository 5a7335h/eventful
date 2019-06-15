import React from 'react';
import './Event.css'

export const Event = ({id, summary, category}) => {
    return (<li><img src={require(`../../../images/${category}.jpg`)}/>
    <h3>{summary}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p></li>);
};