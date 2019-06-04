import React, { Component } from "react";
import "./whitebanner2.css";
import Scroll from "./scroll.jsx";
import Bighead from "./bighead";
import { tsStringKeyword } from "@babel/types";
class WhiteBanner2 extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      heit: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY > 2230) {
      var mass = Math.min(35, -223 + 0.1 * window.scrollY);
      this.setState({ heit: mass / 100 });
      console.log("Window height");
      console.log(mass);
    } else {
      this.setState({ heit: 0 });
    }
  }
  render() {
    return (
      <div
        className="whitebanner2"
        style={{
          height: window.innerHeight * this.state.heit + "px",
          marginTop: window.innerHeight * 0.5 + "px"
        }}
      >
        <img
          style={{
            height: 5 + "vh",
            width: 5 + "vh",
            marginTop: window.innerHeight * 0.1 + "px"
          }}
          className="img2"
          src={require("../images/work.png")}
        />

        <img
          style={{ height: 3 + "vh", marginTop: 2 + "vh" }}
          src={require("../images/visa.png")}
        />
      </div>
    );
  }
}
export default WhiteBanner2;
