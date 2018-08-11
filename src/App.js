import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer/Timer.js'
import StartButton from './components/StartButton/StartButton.js'
import TimerControl from './components/TimerControl/TimerControl';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: '00',
      minutes: '5'
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pomodoro!!! <span aria-label="Tomato" role="img">🍅 </span></h1>
        </header>
       
        <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
        <TimerControl/>
        <StartButton/>
      </div>
    );
  }
}

export default App;
