import React, { Component } from "react";
import "./whitebanner.css";
import Scroll from "./scroll.jsx";
import Bighead from "./bighead";
import { tsStringKeyword } from "@babel/types";
class WhiteBanner extends Component {
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
    if (window.scrollY > 1100) {
      var mass = Math.min(0, -161 + 0.1 * window.scrollY);
      this.setState({ wid: mass });
    } else {
      this.setState({ wid: 100 });
    }
  }
  render() {
    return (
      <div
        className="whitebanner"
        style={{
          marginTop: this.state.wid + "vh",
          height: window.innerHeight * 0.4 + "px"
        }}
      >
        {this.props.content}
      </div>
    );
  }
}
export default WhiteBanner;
