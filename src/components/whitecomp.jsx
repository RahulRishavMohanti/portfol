import React, { Component } from "react";
import "./whitecomp.css";
import Scroll from "./scroll.jsx";
import Bighead from "./bighead";
class WhiteComp extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      wid: 100
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    var mass = Math.max(0, 100 - 0.1 * window.scrollY);
    this.setState({ wid: mass });
  }
  render() {
    return (
      <div className="wc" style={{ width: this.state.wid + "%" }}>
        <Scroll />
      </div>
    );
  }
}
export default WhiteComp;
