import React from 'react';
import App from './Containers/App.js';
import {IndexRoute, Router, Route, hasHistory } from 'react-router;'
export default (
  <Router history={hasHistory}>
    <Route path="/" component={App}>
      <IndexRoute/>
    </Route>
  </Router>
);
