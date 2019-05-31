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
      <div className="grid-container" style={{ color: this.state.col }}>
        <div
          className="grid-item"
          style={{
            gridRowStart: 1,
            gridRowEnd: 4,
            textAlign: "center"
          }}
        >
          HTML
        </div>
        <div
          className="grid-item"
          style={{
            gridRowStart: 1,
            gridRowEnd: 4,
            gridColumn: 3,
            textAlign: "center",
            verticalAlign: "middle"
          }}
        >
          C++
        </div>
        <div
          className="grid-item"
          style={{
            gridColumnStart: 4,
            gridColumnEnd: 6,
            gridRowStart: 1,
            gridRowEnd: 4,
            textAlign: "center"
          }}
        >
          Python
        </div>
      </div>
    );
  }
}
export default Grid;
