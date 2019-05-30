import React, { Component } from "react";
import "./bighead.css";

class Bighead extends Component {
  render() {
    return (
      <div
        className="bighead"
        style={{
          color: this.props.col
        }}
      >
        {this.props.title}
      </div>
    );
  }
}
export default Bighead;
