import React from 'react';
import $ from 'jquery';

// import FlowsList from './../flows/FlowsList';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        {/* <FlowsList name="default" flows={['prova']}/> */}
        <button onClick={this.login}>Github Login</button>
      </div>
    );
  }

  login() {
    console.log('LOGIN');
    $.get({
      dataType: 'json',
      url: 'http://localhost:5000/github-auth'}
    ).done(function(data) {
      location.href = data.auth_url;
    });
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
