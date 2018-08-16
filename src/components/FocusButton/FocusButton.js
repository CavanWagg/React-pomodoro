import React from "react";

class FocusButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increaseFocus} className="increase-button">
          {" "}
          +{" "}
        </button>
        <button onClick={this.props.startFocus}>
          Focus {this.props.focus}
        </button>
        <button onClick={this.props.decreaseFocus} className="decrease-button">
          {" "}
          -{" "}
        </button>
      </div>
    );
  }
}

export default FocusButton;
