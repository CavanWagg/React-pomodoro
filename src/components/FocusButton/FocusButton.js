import React from "react";
import { Button } from "react-bootstrap";

class FocusButton extends React.Component {
  render() {
    return (
      <div className="text-center">
        <Button
          bsStyle="primary hidden-xs"
          bsSize="large"
          onClick={this.props.startFocus}
        >
          Focus
        </Button>

        <Button
          bsSize="large"
          bsStyle="primary visible-xs"
          onClick={this.props.startFocus}
        >
          Focus
        </Button>
      </div>
    );
  }
}

export default FocusButton;
