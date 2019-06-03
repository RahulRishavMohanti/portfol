import React, { Component } from "react";
import "./grid.css";
class Grid extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      col: "#222222"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY > 6098) {
      this.setState({ col: "white" });
    } else {
      this.setState({ col: "#222222" });
    }
  }
  render() {
    return (
      <div
        className="grid-container"
        style={{
          color: this.state.col,
          height: window.innerHeight * 0.4 + "px"
        }}
      >
        <div
          className="grid-item2"
          style={{
            gridColumn: 1,
            gridRow: 1,
            textAlign: "Left"
          }}
        >
          HTML
        </div>
        <div
          className="grid-item2"
          style={{
            gridColumn: 2,
            gridRowStart: 1,
            gridRowEnd: 3,
            textAlign: "Right",
            lineHeight: 300 + "%"
          }}
        >
          JS
        </div>
        <div
          className="grid-item2"
          style={{
            gridRowStart: 2,
            gridRowEnd: 4,
            gridColumn: 3,
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: 50 + "%"
          }}
        >
          C++
        </div>
        <div
          className="grid-item2"
          style={{
            gridColumnStart: 4,
            gridColumnEnd: 4,
            gridRowStart: 1,
            gridRowEnd: 4,
            textAlign: "right",
            verticalAlign: "middle",
            lineHeight: 50 + "%"
          }}
        >
          Python
        </div>
        <div
          className="grid-item1"
          style={{
            gridColumn: 4,
            gridRow: 2,
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: 400 + "%"
          }}
        >
          MachineLearning
        </div>
        <div
          className="grid-item1"
          style={{
            gridColumn: 2,
            gridRow: 2,
            textAlign: "left",
            verticalAlign: "middle",
            lineHeight: 178 + "%"
          }}
        >
          WebDev
        </div>
        <div
          className="grid-item2"
          style={{
            gridColumn: 2,
            gridRow: 3,
            textAlign: "center"
          }}
        >
          CSS
        </div>
        <div
          className="grid-item1"
          style={{
            gridColumn: 3,
            gridRow: 3,
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: 300 + "%"
          }}
        >
          IoT
        </div>
        <div
          className="grid-item2"
          style={{
            gridColumn: 1,
            gridRow: 3,
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: 178 + "%"
          }}
        >
          Arduino
        </div>
      </div>
    );
  }
}
export default Grid;
