import React, { Component } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer.js";
import StartButton from "./components/StartButton/StartButton.js";
import TimerControl from "./components/TimerControl/TimerControl";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      minutes: 5
    };
    this.secondsRemaining;
    this.intervalHandle;
    this.increaseTime = this.increaseTime.bind(this);
    this.decreaseTime = this.decreaseTime.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.tick = this.tick.bind(this);
  }
  // bind method to constructor

  increaseTime = () => {
    console.log("increase Time!");
    this.setState({
      minutes: this.state.minutes + 1
    });
  };

  decreaseTime = () => {
    this.setState({
      minutes: this.state.minutes - 1
    });
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

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  };

  startCountdown = () => {
    console.log("startCountdown!");
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Pomodoro!!!{" "}
            <span aria-label="Tomato" role="img">
              🍅{" "}
            </span>
          </h1>
        </header>

        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <TimerControl
          minutes={this.state.minutes}
          increaseTime={this.increaseTime}
          decreaseTime={this.decreaseTime}
        />
        <StartButton startCountdown={this.startCountdown} />
      </div>
    );
  }
}

export default App;
