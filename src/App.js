import React, { Component } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer.js";
import FocusButton from "./components/FocusButton/FocusButton.js";
// import TimerControl from "./components/TimerControl/TimerControl";
import BreakButton from "./components/BreakButton/BreakButton";
import StopButton from "./components/StopButton/StopButton";
import Controls from "./components/Controls/Controls";
import { Jumbotron, Button, Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      minutes: 0,
      focus: 25,
      break: 5,
      timerRunning: false
    };
    this.secondsRemaining;
    this.intervalHandle;
    this.increaseFocus = this.increaseFocus.bind(this);
    this.decreaseFocus = this.decreaseFocus.bind(this);
    this.startFocus = this.startFocus.bind(this);
    this.tick = this.tick.bind(this);
  }
  // bind method to constructor

  increaseFocus = () => {
    if (this.state.focus <= 60) {
      console.log("increase Time!");
      this.setState({
        focus: this.state.focus + 1
      });
    }
  };

  decreaseFocus = () => {
    if (this.state.focus > 10)
      this.setState({
        focus: this.state.focus - 1
      });
  };

  increaseBreak = () => {
    if (this.state.break <= 20) {
      console.log("increase Time!");
      this.setState({
        break: this.state.break + 1
      });
    }
  };

  decreaseBreak = () => {
    if (this.state.break > 1) {
      this.setState({
        break: this.state.break - 1
      });
    }
  };

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
      <div className="App">
        <Jumbotron bsStyle="primary">
          <h1 className="App-title">
            Pomodoro!!!{" "}
            <span aria-label="Tomato" role="img">
              🍅{" "}
            </span>
          </h1>
        </Jumbotron>
        <div className="main">
          <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
          <div>
            <FocusButton startFocus={this.startFocus} />
            <BreakButton startBreak={this.startBreak} />
            <StopButton stopTimer={this.stopTimer} />
          </div>
        </div>

        <footer className="footer navbar-fixed-bottom">
          <Grid>
            <Row>
              <Col md={6} />
              <Col md={6}>
                <div>
                  {/* <p> Focus </p>
                  <p> Break </p> */}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} />
              <Col md={6}>
                <Controls
                  focus={this.state.focus}
                  break={this.state.break}
                  increaseBreak={this.increaseBreak}
                  decreaseBreak={this.decreaseBreak}
                  increaseFocus={this.increaseFocus}
                  decreaseFocus={this.decreaseFocus}
                />
              </Col>
            </Row>
            <Row>
              Designed & Coded by{" "}
              <a href="https://github.com/CavanWagg">Cavan Wagg</a>{" "}
            </Row>
          </Grid>
        </footer>
      </div>
    );
  }
}

export default App;
