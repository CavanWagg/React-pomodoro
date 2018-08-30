import React, { Component } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer.js";
import FocusButton from "./components/FocusButton/FocusButton.js";
// import TimerControl from "./components/TimerControl/TimerControl";
import BreakButton from "./components/BreakButton/BreakButton";
import StopButton from "./components/StopButton/StopButton";
import Controls from "./components/Controls/Controls";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";

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
  // bind method to constructor

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
          <div className="text-center">
            <FocusButton startFocus={this.startFocus} />
            <BreakButton startBreak={this.startBreak} />
            <StopButton stopTimer={this.stopTimer} />
          </div>
        </div>

        <footer className="footer text-center navbar-fixed-bottom">
          <Grid>
            <Row>
              <Col md={6} />
              <Col md={6}>
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
            <Row>
              <p class="footer-text">
                <span role="img" aria-label="rocket">
                  🚀
                </span>{" "}
                Designed & Coded by
                <a href="https://github.com/CavanWagg"> Cavan Wagg </a>
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
