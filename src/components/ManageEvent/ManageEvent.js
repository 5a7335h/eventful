import React from 'react';
import {useState, useEffect} from 'react';
import {Categories} from '../../Constants';
import {saveEventAction} from '../../actions/index'
import './ManageEvent.css';
import {connect} from 'react-redux';

const ManageEvent = ({inputEvent, isSuccess, saveEventAction}) => {
    const suppliedEvent = inputEvent || {id:0, summary: "", category:""};
    const [eventState, setEvent] = useState(suppliedEvent);

    const setSummary = (evnt) =>{
        setEvent({...eventState, summary: evnt.target.value});
    };

    const setCategory = (evnt)=>{
        setEvent({...eventState, category: evnt.target.value});
    };

    const submitEvent = (evnt)=>{
        evnt.preventDefault();
        saveEventAction(eventState);
    };

    useEffect(()=>{
        isSuccess && alert('success');
    },[isSuccess])

    return (
    <form onSubmit={evnt=>submitEvent(evnt)}>
        <div className={"container"}>
            <div className="row">
                <div className="col-sm-3">
                    Id: 
                </div>
                <div className="col-sm-3">{eventState.id}</div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    Summary:
                </div>
                <div className="col-sm-3">
                    <input type="text" onChange={evnt=>setSummary(evnt)} value={eventState.summary}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    Category:
                </div>
                <div className="col-sm-3">
                    <select onChange={evnt=>setCategory(evnt)} style={{width:'100%'}} value={eventState.category}>
                        {Categories.map(cat => <option key={cat} value={cat}>{cat}</option>)};
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <button className={"submitButton"} type="submit">Add</button>
                </div>
            </div>
        </div>
    </form>);
}

const mapDispatchToProps = {
    saveEventAction
}

const mapStateToProps = (state) => {
    return {isSuccess : state.eventData.isSuccess};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEvent);