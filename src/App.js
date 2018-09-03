import React, { Component } from "react";
import "./purified.css";
import Timer from "./components/Timer/Timer.js";
import FocusButton from "./components/FocusButton/FocusButton.js";
import BreakButton from "./components/BreakButton/BreakButton";
import StopButton from "./components/StopButton/StopButton";
import Controls from "./components/Controls/Controls";
import { Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      minutes: 25,
      focus: 25,
      break: 5,
      timerRunning: false,
      endTime: false
    };
    this.secondsRemaining;
    this.intervalHandle;
    this.changeFocusLength = this.changeFocusLength.bind(this);
    this.changeBreakLength = this.changeBreakLength.bind(this);
    this.lengthControl = this.lengthControl.bind(this);
    this.startFocus = this.startFocus.bind(this);
    this.tick = this.tick.bind(this);
    this.notify = this.notify.bind(this);
  }

  notify() {
    if (
      document.getElementById("alarmSound").checked == true &&
      this.state.endTime == true
    ) {
      let audio = new Audio("https://goo.gl/65cBl1");
      audio.play();
    }
    if (
      document.getElementById("notification").checked == true &&
      this.state.endTime == true
    ) {
      new Notification("Time's up!");
    }
  }

  askPermission() {
    Notification.requestPermission();
  }

  changeFocusLength(e) {
    this.lengthControl("focus", e.currentTarget.value, this.state.focus);
  }
  changeBreakLength(e) {
    this.lengthControl("break", e.currentTarget.value, this.state.break);
  }

  lengthControl(stateToChange, sign, currentLength) {
    if (sign === "—" && currentLength > 1) {
      this.setState({ [stateToChange]: currentLength - 1 });
    }
    if (sign === "+" && currentLength < 60) {
      this.setState({ [stateToChange]: currentLength + 1 });
    }
  }

  tick = () => {
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - min * 60;

    this.setState({
      minutes: min,
      seconds: sec
    });

    //display 0 to the left of the single digit second
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }

    // change endTime: true
    if ((min === 0) & (sec === 0)) {
      this.setState({
        endTime: true
      });
      this.notify();

      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  };

  startFocus = () => {
    clearInterval(this.intervalHandle);
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.focus;
    this.secondsRemaining = time * 60;
    this.setState({
      timerRunning: !this.state.timerRunning,
      endTime: false
    });
  };

  startBreak = () => {
    clearInterval(this.intervalHandle);
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.break;
    this.secondsRemaining = time * 60;
    this.setState({
      timerRunning: !this.state.timerRunning,
      endTime: false
    });
  };

  stopTimer = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      timerRunning: !this.state.timerRunning
    });
  };

  render() {
    return (
      <div className="container-fluid" id="App">
        <div className="main">
          <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
          <div className="button-div text-center">
            <FocusButton startFocus={this.startFocus} />
            <BreakButton startBreak={this.startBreak} />
            <StopButton stopTimer={this.stopTimer} />
          </div>
        </div>

        <footer className="footer text-center navbar-fixed-bottom">
          <Grid fluid={true}>
            <Row className="bg-primary">
              <Col md={6} sm={6}>
                <div className="checkbox-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="notification"
                      onClick={this.askPermission}
                    />
                    <label htmlFor="notification">Notification</label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="alarmSound"
                    />
                    <label htmlFor="alarmSound">Sound</label>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={6}>
                <div className="duration-control">
                  <div className="control-title" />
                  <Controls
                    title="Break Length"
                    length={this.state.break}
                    lengthControl={this.lengthControl}
                    onClick={this.changeBreakLength}
                    changeBreakLength={this.changeBreakLength}
                  />
                  <Controls
                    title="Focus Length"
                    length={this.state.focus}
                    lengthControl={this.lengthControl}
                    onClick={this.changeFocusLength}
                    changeFocusLength={this.changeFocusLength}
                  />
                </div>
              </Col>
            </Row>
            <Row className="bg-info">
              <p className="footer-text">
                <span role="img" aria-label="rocket">
                  🚀
                </span>{" "}
                Designed & Coded by
                <a className="font-primary" href="https://github.com/CavanWagg">
                  {" "}
                  Cavan Wagg{" "}
                </a>
                <span role="img" aria-label="nerd-face">
                  🤓
                </span>
              </p>
            </Row>
          </Grid>
        </footer>
      </div>
    );
  }
}

export default App;
