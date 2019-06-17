import * as ActionTypes from '../Constants';

export const getEventsAction = () => ({type: ActionTypes.GetEventsAction}); 

export const saveEventAction = (inputEvent) => ({type: ActionTypes.SaveEventAction, payload: inputEvent});