import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Game from './pages/GamePage';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Game} />
        {/* <Route exact path="/game" component={Game} /> */}
      </Switch>
    </>
  );
}

export default App;
