import {Event} from '../Event/Event';
import React from 'react';
import {getEventsAction} from '../../actions/index';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import './EventsList.css'

const EventsList = ({events, loading, getEventsAction}) =>{
    
    useEffect(()=>{
        getEventsAction(); 
    },[]);
      return<>
        {loading && <div>still loading...</div>}
        <div>
           <ul>
                {events && events.map( event => <Event key={event._id} id={event.id} summary={event.summary} category={event.category}  />)}
           </ul>
        </div>
      </>;
}

const mapDispatchToProps = {
    getEventsAction
}

function mapStateToProps(state){
    return {
        events: state.eventData.events,
        loading: state.eventData.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);