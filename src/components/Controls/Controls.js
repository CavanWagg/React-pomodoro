import React from "react";
import "./Controls.css";
import { Button } from "react-bootstrap";

class Controls extends React.Component {
  render() {
    return (
      <div className="controls-div">
        <div>{this.props.title}</div>
        <Button
          bsStyle="success"
          onClick={this.props.onClick}
          className="increase-button"
          value="+"
        >
          {" "}
          +{" "}
        </Button>
        {this.props.length}
        <Button
          bsStyle="success"
          onClick={this.props.onClick}
          className="decrease-button"
          value="-"
        >
          {" "}
          -{" "}
        </Button>
        {/* Short Break */}
      </div>
    );
  }
}

export default Controls;
