import * as ActionTypes from '../constants';
import {combineReducers} from 'redux';

export function eventsReducer(state=[], action){
    switch(action.type)
    {
        case ActionTypes.EventsReceivedAction:
            return [...state, ...[{id: 1, name: "one"}, {id: 2, name: "two"}]];
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    events: eventsReducer
});