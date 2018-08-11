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
        <StartButton />
      </div>
    );
  }
}

export default App;
