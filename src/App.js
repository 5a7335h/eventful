import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventsList from './components/EventsList/EventsList';
import {Switch, Route} from "react-router-dom"
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/events" exact component={EventsList} />
        <Route path="/" exact component={EventsList} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
