import { all, takeEvery, put, delay } from 'redux-saga/effects';
import * as ActionTypes from '../constants';

export default function* rootSaga()
{   
    yield all([getEventsWatcher()]);
}

function* getEventsWatcher(){
    yield takeEvery(ActionTypes.GetEventsAction, getEvents);
}

function* getEvents(){
    yield delay(5000);
    yield put({type:ActionTypes.EventsReceivedAction});
}