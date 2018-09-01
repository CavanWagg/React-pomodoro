import React, { Component } from "react";
import "./App.css";
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
      timerRunning: false
    };
    this.secondsRemaining;
    this.intervalHandle;
    this.changeFocusLength = this.changeFocusLength.bind(this);
    this.changeBreakLength = this.changeBreakLength.bind(this);
    this.lengthControl = this.lengthControl.bind(this);
    this.startFocus = this.startFocus.bind(this);
    this.tick = this.tick.bind(this);
  }

  notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Hi there!");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission(function(permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }

    // Finally, if the user has denied notifications and you
    // want to be respectful there is no need to bother them any more.
  }

  changeFocusLength(e) {
    this.lengthControl("focus", e.currentTarget.value, this.state.focus);
  }
  changeBreakLength(e) {
    this.lengthControl("break", e.currentTarget.value, this.state.break);
  }

  lengthControl(stateToChange, sign, currentLength) {
    console.log(stateToChange, currentLength);
    if (sign === "-" && currentLength > 1) {
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

    if ((min === 0) & (sec === 0)) {
      let audio = new Audio("https://goo.gl/65cBl1");
      let notificationTitle = "Time's up";

      audio.play();
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
      timerRunning: !this.state.timerRunning
    });
  };

  startBreak = () => {
    clearInterval(this.intervalHandle);
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.break;
    this.secondsRemaining = time * 60;
    this.setState({
      timerRunning: !this.state.timerRunning
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
      <div id="App">
        <div className="main">
          <Timer minutes={this.state.minutes} seconds={this.state.seconds}>
            {" "}
            <span aria-label="Tomato" role="img">
              🍅{" "}
            </span>{" "}
          </Timer>
          <div className="text-center button-div">
            <FocusButton startFocus={this.startFocus} />
            <BreakButton startBreak={this.startBreak} />
            <StopButton stopTimer={this.stopTimer} />
          </div>
        </div>

        <footer className="footer text-center navbar-fixed-bottom">
          <Grid>
            <Row className="bg-primary">
              <Col md={8}>
                <div className="checkbox-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="notificaiton"
                    />
                    <label htmlFor="notification">Notification</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="alarmSound"
                    />
                    <label htmlFor="alarmSound">Sound</label>
                  </div>
                </div>
              </Col>
              <Col md={4}>
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
              <p class="footer-text">
                <span role="img" aria-label="rocket">
                  🚀
                </span>{" "}
                Designed & Coded by
                <a class="font-primary" href="https://github.com/CavanWagg">
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
