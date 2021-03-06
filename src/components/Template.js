import React from 'react';
import Relay from 'react-relay';

require("../../public/css/main.css");

class Template extends React.Component {

  render() {
    return (
      <div>
        {/* Header goes here */}
        { this.props.children }
        {/* Footer goes here */}
      </div>
    );
  }

}

export default Relay.createContainer(Template, {
  initialVariables: {},
  fragments: {
    data: () => Relay.QL`
      fragment on Data {
        id
      }
    `
  }
});
