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
    if (window.scrollY > 11104) {
      var mass = Math.min(35, -111.04 + 0.01 * window.scrollY);
      this.setState({ heit: mass });
      console.log("Window height");
      console.log(mass);
    } else {
      this.setState({ heit: 0 });
    }
  }
  render() {
    return (
      <div className="whitebanner2" style={{ height: this.state.heit + "vh" }}>
        <img src={require("../images/work.png")} />

        <img
          style={{ height: 3 + "vh", marginTop: 2 + "vh" }}
          src={require("../images/visa.png")}
        />
      </div>
    );
  }
}
export default WhiteBanner2;
