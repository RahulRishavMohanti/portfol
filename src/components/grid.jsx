import React, { Component } from "react";
import "./grid.css";
class Grid extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      opac: 1
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY > 1100) {
      var x = window.scrollY / 5000;
      this.setState({ opac: 1 - x });
    }
  }
  render() {
    return (
      <div className="grid-container">
        <div
          className="grid-item"
          style={{ gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center" }}
        >
          HTML
        </div>
        <div className="grid-item">C++</div>
        <div className="grid-item" />
        <div
          className="grid-item"
          style={{ gridColumnStart: 2, gridColumnEnd: 3, textAlign: "center" }}
        >
          WebDev
        </div>
        <div
          className="grid-item"
          style={{ gridColumnStart: 1, gridColumnEnd: 2, textAlign: "center" }}
        >
          Arduino
        </div>
        <div className="grid-item" />
        <div className="grid-item" />
        <div className="grid-item">ReactJS</div>
        <div className="grid-item" />
        <div className="grid-item" />
        <div className="grid-item" />
        <div className="grid-item">C++</div>
        <div
          className="grid-item"
          style={{
            gridColumn: 4,
            gridRowStart: 2,
            gridRowEnd: 4,
            textAlign: "center"
          }}
        >
          Python
        </div>

        <div className="grid-item" />
        <div className="grid-item" />
        <div className="grid-item" />
      </div>
    );
  }
}
export default Grid;
