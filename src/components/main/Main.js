import React from 'react';
import $ from 'jquery';

// import FlowsList from './../flows/FlowsList';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        {
          /* <FlowsList name="default" flows={['prova']}/> */
        }
        <button onClick={this.login}>Github Login</button>
      </div>
    );
  }

  login() {
    console.log('LOGIN');
    $.get({
      dataType: 'jsonp',
      url: 'http://localhost:5000/github-auth'
    }).done(function(data) {
      console.log('AUTH DONE', data);
    })
      // .then(function(data) {
      //   console.log(data);
      // })
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
