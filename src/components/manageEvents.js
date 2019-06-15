import {Event} from './event';
import React from 'react';
import {getEventsAction} from '../actions/index';
import {connect} from 'react-redux';

const ManageEvents = ({events, getEventsAction}) =>{
         
      return <div>
          <button onClick={getEventsAction}>Show me!</button>
          {events.map( event => <Event {...event} />)}
        </div>;
}

const mapDispatchToProps = {
    getEventsAction
}

function mapStateToProps(state){
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEvents);