import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Navbar } from './components';

import Home from './pages/HomePage';
import Game from './pages/GamePage';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </>
  );
}

export default App;
