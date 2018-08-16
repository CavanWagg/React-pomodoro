import React from "react";

class stopButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.stopTimer}>Stop</button>
      </div>
    );
  }
}

export default stopButton;
