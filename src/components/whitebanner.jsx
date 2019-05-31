import React, { Component } from "react";
import "./whitebanner.css";
import Scroll from "./scroll.jsx";
import Bighead from "./bighead";
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
      var mass = Math.min(0, -61 + 0.01 * window.scrollY);
      this.setState({ wid: mass });
      console.log(mass);
    }
  }
  render() {
    return (
      <div className="whitebanner" style={{ marginTop: this.state.wid + "vh" }}>
        {this.props.content}
      </div>
    );
  }
}
export default WhiteBanner;
