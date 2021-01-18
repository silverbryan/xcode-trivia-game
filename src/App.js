import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home, Game } from './pages';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </>
  );
}

export default App;
