import React, { Component } from "react";
import { Button } from "react-bootstrap";

class BreakButton extends Component {
  render() {
    return (
      <Button bsSize="large" onClick={this.props.startBreak}>
        Break
      </Button>
    );
  }
}

export default BreakButton;
