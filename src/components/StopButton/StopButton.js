import React from "react";
import { Button } from "react-bootstrap";

class stopButton extends React.Component {
  render() {
    return (
      <Button bsSize="large" bsStyle="danger" onClick={this.props.stopTimer}>
        Stop
      </Button>
    );
  }
}

export default stopButton;
