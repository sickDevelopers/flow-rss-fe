import React from 'react';
import $ from 'jquery';

import AuthStore from '../../stores/authStore.js';
var Dispatcher = require('flux').Dispatcher;

// import FlowsList from './../flows/FlowsList';

var AppComponent = React.createClass({

  authDispatcher : new Dispatcher(),

  getInitialState: function() {

  },

  componentDidMount: function() {

    AuthStore.dispatchToken = this.authDispatcher.register(function(payload) {
      if(payload.action === 'github-auth') {
        console.log('AUTH WITH GITHUB');
        AuthStore.authType = 'github';
      }
    })

  },

  render : function() {
    return (
      <div className="main">
        {/* <FlowsList name="default" flows={['prova']}/> */}
        <button onClick={this.login}>Github Login</button>
      </div>
    );
  },

  login: function() {
    console.log('LOGIN');

    this.authDispatcher.dispatch({
      action: 'github-auth'
    });

    // $.get({
    //   dataType: 'json',
    //   url: 'http://localhost:5000/github-auth'}
    // ).done(function(data) {
    //   location.href = data.auth_url;
    // });
  }
});

AppComponent.defaultProps = {};

export default AppComponent;
