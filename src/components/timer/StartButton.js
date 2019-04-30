import React, { Component } from "react";

export default class StartButton extends Component {
  render() {
    return (
      <div className="start-btn">
        <button onPointerEnter={this.props.handleClick} className="btn">
          Start
        </button>
      </div>
    );
  }
}
