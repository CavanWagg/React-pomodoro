import React from "react";
import "./Controls.css";
import { Button } from "react-bootstrap";

class Controls extends React.Component {
  render() {
    return (
      <div className="controls-div">
        {/* Focus */}
        <Button
          bsStyle="success"
          onClick={this.props.increaseFocus}
          className="increase-button"
        >
          {" "}
          +{" "}
        </Button>
        Focus {this.props.focus}
        <Button
          bsStyle="success"
          onClick={this.props.decreaseFocus}
          className="decrease-button"
        >
          {" "}
          -{" "}
        </Button>
        {/* Short Break */}
        <Button
          bsStyle="success"
          onClick={this.props.increaseBreak}
          className="increase-button"
        >
          {" "}
          +{" "}
        </Button>
        Break {this.props.break}
        <Button
          bsStyle="success"
          onClick={this.props.decreaseBreak}
          className="decrease-button"
        >
          {" "}
          -{" "}
        </Button>
        {/* Long Break  */}
      </div>
    );
  }
}

export default Controls;
