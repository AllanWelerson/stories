import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './Stories';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path="/stories/:id?" component={Stories} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
