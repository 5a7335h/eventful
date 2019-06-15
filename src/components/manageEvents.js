import {Event} from './event';
import React from 'react';
import {getEventsAction} from '../actions/index';
import {connect} from 'react-redux';
import {useEffect} from 'react';

const ManageEvents = ({events, loading, getEventsAction}) =>{
    
    useEffect(()=>{
        getEventsAction(); 
    },events);
      return <div>
          {loading && <div>still loading...</div>}
          {events && events.map( event => <Event {...event} />)}
        </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageEvents);