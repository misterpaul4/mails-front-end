import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Inbox from './InboxPage';
import './css/index.css';

const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/users/:username/messages" component={Inbox} />
  </Switch>
</BrowserRouter>
)

export default Routes;
