import React, { Component } from 'react';
import '../header/header.css'

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: this.calculateTimeRemaining(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculateTimeRemaining = () => {
    const endDate = new Date('2023-09-23T23:59:59').getTime(); // End date in milliseconds
    const currentTime = new Date().getTime(); // Current time in milliseconds
    const timeRemaining = endDate - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(this.interval);
      return 0; // Timer reached the end
    }

    return Math.floor(timeRemaining / 1000); // Convert to seconds
  };

  updateTimer = () => {
    const { timeRemaining } = this.state;

    if (timeRemaining <= 0) {
      clearInterval(this.interval);
    } else {
      this.setState((prevState) => ({
        timeRemaining: prevState.timeRemaining - 1,
      }));
    }
  };

  formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  render() {
    const { timeRemaining } = this.state;
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
      <div className="timer">
        <h1 className="hours time">{this.formatTime(hours)}<span>H</span></h1>
        <h1 className="mins time">{this.formatTime(minutes)}<span>M</span></h1>
        <h2 className="sec time">{this.formatTime(seconds)}<span>S</span></h2>
      </div>
    );
  }
}

export default CountdownTimer;
