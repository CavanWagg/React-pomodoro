import React, { Component } from "react";
import { Button } from "react-bootstrap";

class BreakButton extends Component {
  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          onClick={this.props.increaseBreak}
          className="increase-button"
        >
          {" "}
          +{" "}
        </Button>
        <Button bsStyle="primary" onClick={this.props.startBreak}>
          Break {this.props.break}
        </Button>

        <Button
          bsStyle="primary"
          onClick={this.props.decreaseBreak}
          className="decrease-button"
        >
          {" "}
          -{" "}
        </Button>
      </div>
    );
  }
}

export default BreakButton;
