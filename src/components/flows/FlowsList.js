import React from 'react';
import $ from 'jquery';

import FlowsListItem from './FlowsListItem.js';

var FlowsList = React.createClass({

  flowsSource: 'http://localhost:5000/flows/all',

  getInitialState: function() {
    return {
      flows: []
    }
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.flowsSource)
      .then(function(response) {
        this.setState({
          flows: response
        })
      }.bind(this));
  },

  render: function() {
    return (
      <div className="">
        <div>
          <h3>Flows List -- {this.props.name}</h3>
          <span><button name="">Add Flow</button></span>
        </div>
        <ul>
          {this.state.flows.map(function(flow) {
            return <FlowsListItem />
          })
        }
        </ul>
      </div>
    )
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  }
});

FlowsList.defaultProps = {
  flows : []
};

export default FlowsList;
