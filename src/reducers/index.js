import * as ActionTypes from '../Constants';
import {combineReducers} from 'redux';

const initialEventData = {
    loading: true
};

export function eventsReducer(state=initialEventData, action){
    switch(action.type)
    {
        case ActionTypes.EventsReceivedAction:
            return {...state, events: action.apiResult, loading: false};
        case ActionTypes.SaveEventSuccessAction:
            return {...state, isSuccess: true};
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    eventData: eventsReducer
}); 