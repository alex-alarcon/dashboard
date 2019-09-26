import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Signup from '../Pages/Signup';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Redirect
        to={{
          pathname: '/signup',
        }}
      />
    </Switch>
  );
}

export default App;
