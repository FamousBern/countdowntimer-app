import React, { Component } from "react";
import Timer from "./timer/Timer";
import TimerInput from "./timer/TimerInput";
import StartButton from "./timer/StartButton";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      minutes: ""
    };
    this.secondsRemainining = "";
    this.intervalHandle = "";
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  tick = () => {
    var min = Math.floor(this.secondsRemainining / 60);
    var sec = this.secondsRemainining - min * 60;
    this.setState({
      minutes: min,
      seconds: sec
    });

    if (sec > 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        minutes: "0" + min
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }
    this.secondsRemainining--;
  };

  startCountDown = () => {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemainining = time * 60;
  };

  render() {
    return (
      <div className="home-page">
        <h1>Countdowntimer</h1>
        <TimerInput
          handleChange={this.handleChange}
          minute={this.state.minutes}
        />
        <Timer minute={this.state.minutes} second={this.state.seconds} />
        <StartButton handleClick={this.startCountDown} />
      </div>
    );
  }
}

export default Home;
