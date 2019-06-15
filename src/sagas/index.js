import { all, takeEvery, put } from 'redux-saga/effects';
import * as ActionTypes from '../constants';

export default function* rootSaga()
{   
    yield all([getEventsWatcher()]);
}

function* getEventsWatcher(){
    yield takeEvery(ActionTypes.GetEventsAction,getEvents);
}

function* getEvents(){
    yield put({type:ActionTypes.EventsReceivedAction});
}