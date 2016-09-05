import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/main/Main';

// First we import some modules...
import { Router, Route, hashHistory } from 'react-router'

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/*
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox} />
      */}
    </Route>
  </Router>
), document.getElementById('app'))

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
