import React from 'react';

class Timer extends React.Component {
  // this.state = {
  //   breakLength: 5,
  //   sessionLength: 25,
  //   timerState: 'paused',
  //   timerType: 'Session',
  //   timer: 
  // }
  render () {
    return (
      <div>
        <h1> {this.props.minutes}:{this.props.seconds} </h1>
        </div>
    );
  }
}

export default Timer;