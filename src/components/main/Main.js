import React from 'react';

import FlowsList from './../flows/FlowsList';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <FlowsList name="default" flows={['prova']}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
