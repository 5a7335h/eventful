import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import {rootReducer} from "./reducers/index";
import { Provider } from "react-redux";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
