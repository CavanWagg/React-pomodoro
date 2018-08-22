import React from "react";
import { Button } from "react-bootstrap";

class FocusButton extends React.Component {
  render() {
    return (
      <Button bsSize="large" onClick={this.props.startFocus}>
        Focus
      </Button>
    );
  }
}

export default FocusButton;
