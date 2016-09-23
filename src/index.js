// import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/main/Main';
import GithubAuthback from './components/auth/GithubAuthBack';
import Dashboard from './components/dashboard/Dashboard';
// import $ from 'jquery';

// First we import some modules...
import { Router, Route, hashHistory } from 'react-router'

function requireAuth() {
  // if not logged, redirect

  // if (!auth.loggedIn()) {
  //   replace({
  //     pathname: '/login',
  //     state: { nextPathname: nextState.location.pathname }
  //   })
  // }
}

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/dashboard" component="{Dashboard}" onEnter={requireAuth}></Route>

    <Route path="/github-authback" component={GithubAuthback}></Route>
  </Router>
), document.getElementById('app'))
