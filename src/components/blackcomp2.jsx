import React, { Component } from "react";
import "./blackcomp2.css";
import Scroll from "./scroll.jsx";
import Bighead from "./bighead";
class Blackcomp2 extends Component {
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
    if (window.scrollY > 6100) {
      var scr = window.scrollY - 5000;
      var mass = Math.min(0, -61 + 0.01 * scr);
      this.setState({ wid: mass });
    }
  }
  render() {
    return (
      <div className="blackcomp2" style={{ bottom: this.state.wid + "vh" }}>
        <img src={require("../images/grad.png")} />
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
}
export default Blackcomp2;
