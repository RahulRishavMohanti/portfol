import React, { Component } from "react";
import "./bighead2.css";

class Bighead2 extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      x: 20,
      y: 100,
      styl: "AvenirNext-Bold",
      scrolling: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    this.setState({ styl: "AvenirNext-BoldItalic" });
    var mass = Math.min(4, 1 + 0.005 * window.scrollY);
    var marg = Math.max(26, 100 - 0.1 * window.scrollY);
    this.setState({ x: mass });
    this.setState({ y: marg });
    if (marg === 26) {
      this.setState({ styl: "AvenirNext-Bold" });
    }
    console.log(window.scrollY);
  }
  render() {
    return (
      <div
        className="bighead2"
        style={{
          letterSpacing: this.state.x + "vw",
          marginLeft: this.state.y + "vw",
          fontFamily: this.state.styl
        }}
      >
        {this.props.title}
      </div>
    );
  }
}
export default Bighead2;
