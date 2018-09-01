import React, { Component } from "react";
import { Button } from "react-bootstrap";

class BreakButton extends Component {
  render() {
    return (
      <div>
        <Button
          bsStyle="info hidden-xs"
          bsSize="large"
          onClick={this.props.startBreak}
        >
          Break
        </Button>
        <Button
          bsSize="large"
          bsStyle="info visible-xs"
          onClick={this.props.startBreak}
        >
          Break
        </Button>
      </div>
    );
  }
}

export default BreakButton;
