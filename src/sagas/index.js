import { all, takeEvery, put, delay, call } from 'redux-saga/effects';
import * as ActionTypes from '../Constants';

export default function* rootSaga()
{   
    yield all([getEventsWatcher(),saveEventWatcher()]);
}

function* getEventsWatcher(){
    yield takeEvery(ActionTypes.GetEventsAction, getEvents);
}

function* getEvents(){
    let restDbResponse = yield call(fetch, "https://sat333sh-7980.restdb.io/rest/events",{headers:{'x-apikey':'5d02275727bc5b75bfeb7bb2'}});
    let eventData = yield call([restDbResponse, restDbResponse.json]);
    yield put({type:ActionTypes.EventsReceivedAction, apiResult: eventData});
}

function* saveEventWatcher(){
    yield takeEvery(ActionTypes.SaveEventAction,saveEvent)
}

function* saveEvent(action){
    const restDbResponse = yield call(fetch, 
                                     "https://sat333sh-7980.restdb.io/rest/events",
                                      {
                                          headers:{'x-apikey':'5d02275727bc5b75bfeb7bb2', "cache-control" : "no-cache", "content-type" : "application/json"},
                                          method: 'post',
                                          body: JSON.stringify(action.payload)
                                      });
    const result = yield call([restDbResponse, restDbResponse.json]);
    console.log(result);
    yield put({type:ActionTypes.SaveEventSuccessAction});
}