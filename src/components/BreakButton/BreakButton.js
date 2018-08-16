import React from "react";

class BreakButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increaseBreak} className="increase-button">
          {" "}
          +{" "}
        </button>
        <button onClick={this.props.startBreak}>
          Break {this.props.break}
        </button>

        <button onClick={this.props.decreaseBreak} className="decrease-button">
          {" "}
          -{" "}
        </button>
      </div>
    );
  }
}

export default BreakButton;
