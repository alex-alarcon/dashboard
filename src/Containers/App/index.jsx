import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Signup from '../Pages/Signup';
import Home from '../Pages/Home';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/home" component={Home} />
      <Redirect
        to={{
          pathname: '/signup',
        }}
      />
    </Switch>
  );
}

export default App;
