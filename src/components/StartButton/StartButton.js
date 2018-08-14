import React from "react";

class StartButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.startCountdown}>
          {this.props.buttonDisplay}
        </button>
      </div>
    );
  }
}

export default StartButton;
