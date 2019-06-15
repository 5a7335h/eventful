import * as ActionTypes from '../constants';
import {combineReducers} from 'redux';

const initialEventData = {
    loading: true
};

export function eventsReducer(state=initialEventData, action){
    switch(action.type)
    {
        case ActionTypes.EventsReceivedAction:
            return {...state, events: [{id: 1, name: "one"}, {id: 2, name: "two"}], loading: false};
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    eventData: eventsReducer
}); 