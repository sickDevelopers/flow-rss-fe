import React from 'react';
import $ from 'jquery';

// import FlowsList from './../flows/FlowsList';

class GithubAuthback extends React.Component {

  componentDidMount() {
    var urlParams = location.search.substring(1, location.search.length)
      .split('&');
    var obj = {}
    urlParams.forEach(function(param) {
      obj[param.split('=')[0]] = param.split('=')[1];
    });
    $.post({
      dataType: 'json',
      url: 'http://localhost:5000/github-authback',
      data: obj
    })
    .done(function(data) {
      if(data.access_token) {
        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'bearer ' + data.access_token);
            }
        });
        location.href = '/#/dashboard'
      }
    })
    .fail(function(error) {
      console.error(error);
    })
  }

  render() {
    return (
      <div className="main">
        Loading...
      </div>
    );
  }

}

GithubAuthback.defaultProps = {};

export default GithubAuthback;
