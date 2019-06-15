import {Event} from './Event';
import React from 'react';
import {getEventsAction} from '../actions/index';
import {connect} from 'react-redux';
import {useEffect} from 'react';

const EventsList = ({events, loading, getEventsAction}) =>{
    
    useEffect(()=>{
        getEventsAction(); 
    },[]);
      return<>
        {loading && <div>still loading...</div>}
        <div style={{width:'100%'}} className={"container"}>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th>Reference Number</th>
                        <th>Event Summary</th>
                    </tr>
                </thead>
                <tbody>
                {events && events.map( event => <Event key={event.id} id={event.id} summary={event.summary} />)}
                </tbody>
            </table>
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