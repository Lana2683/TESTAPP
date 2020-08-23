import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BasePage from './components/BasePage';
import LogIn from './components/LogIn'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/logged" component={BasePage} />
          <Route exact path="/" component={LogIn} />
        </Switch>
      </div>
    </ Router>
  );
}

export default App;
