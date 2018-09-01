import React, { Component } from "react";
import { Button } from "react-bootstrap";

class BreakButton extends Component {
  render() {
    return (
      <div>
        <Button bsStyle="info" bsSize="large" onClick={this.props.startBreak}>
          Break
        </Button>
      </div>
    );
  }
}

export default BreakButton;
