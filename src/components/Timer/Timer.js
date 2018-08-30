import React from "react";
import "./Timer.css";
import { Grid } from "react-bootstrap";

class Timer extends React.Component {
  render() {
    return (
      <Grid className="time-grid">
        <h1 className="time">
          {this.props.minutes}:{this.props.seconds}
        </h1>
      </Grid>
    );
  }
}

export default Timer;
