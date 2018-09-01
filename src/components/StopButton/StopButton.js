import React from "react";
import { Button } from "react-bootstrap";

class stopButton extends React.Component {
  render() {
    return (
      <div>
        <Button
          bsSize="large"
          bsStyle="danger hidden-xs"
          onClick={this.props.stopTimer}
        >
          Stop
        </Button>
        <Button
          bsSize="large"
          bsStyle="danger visible-xs"
          onClick={this.props.stopTimer}
        >
          Stop
        </Button>
      </div>
    );
  }
}

export default stopButton;
