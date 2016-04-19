import React, { Component } from 'react';
import {Route, Router, browserHistory} from 'react-router';
import Page     from './Page.js';
import Contents from './Contents.js';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route name="contents" path="/" component = {Contents}/>
        <Route
          name      = "Page"
          path      = "/:name"
          component = {Page}
        />
      </Router>
    );
  }
}
