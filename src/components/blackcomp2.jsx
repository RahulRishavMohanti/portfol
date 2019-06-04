import React, { Component } from "react";
import "./blackcomp2.css";
import Scroll from "./scroll.jsx";
import Bighead from "./bighead";
class Blackcomp2 extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      wid: 100,
      inh: window.innerHeight
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY > 1718) {
      var scr = window.scrollY - 618;
      var mass = Math.min(0, -161 + 0.1 * scr);
      this.setState({ wid: mass / 100 });
    } else {
      this.setState({ wid: 100 });
    }
  }
  render() {
    return (
      <div
        className="blackcomp2"
        style={{
          bottom: window.innerHeight * this.state.wid + "px",
          height: window.innerHeight * 0.5 + "px"
        }}
      >
        <img src={require("../images/grad.png")} />
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
}
export default Blackcomp2;
