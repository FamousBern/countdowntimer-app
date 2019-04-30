import React, { Component } from "react";

export default class TimerInput extends Component {
  render() {
    return (
      <div className="timer-input">
        <input
          className="form-control"
          type="number"
          name="minutes"
          onChange={this.props.handleChange}
          minutes={this.props.minute}
          required
        />
      </div>
    );
  }
}
