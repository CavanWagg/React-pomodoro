import React from "react";

class TimerControl extends React.Component {
  render() {
    return (
      <div>
        <p>Adjust time</p>
        <button onClick={this.props.increaseTime} className="increase-button">
          {" "}
          +{" "}
        </button>
        <button onClick={this.props.decreaseTime} className="decrease-button">
          {" "}
          -{" "}
        </button>
      </div>
    );
  }
}

export default TimerControl;
