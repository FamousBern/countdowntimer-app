import React, { Component } from "react";

class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <h2>
          {this.props.minute} : {this.props.second}
        </h2>
      </div>
    );
  }
}

export default Timer;
