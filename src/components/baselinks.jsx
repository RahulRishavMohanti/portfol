import React, { Component } from "react";
import "./baselinks.css";
import Scroll from "./scroll.jsx";
import Bighead from "./bighead";
class Baselinks extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      opac: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY > 14637) {
      var x = window.scrollY - 10000;
      var mass = Math.max(0, -0.4637 + 0.0001 * x);
      this.setState({ opac: mass });
      console.log("x");
      console.log(x);
      console.log("Opacity");
      console.log(this.state.opac);
    }
  }
  render() {
    return (
      <div
        className="baselinks"
        style={{ bottom: this.state.wid + "vh", opacity: this.state.opac }}
      >
        <div className="flex-container">
          <div>
            <img className="img2" src={require("../images/insta.png")} />
          </div>
          <div>
            {" "}
            <img className="img2" src={require("../images/git.png")} />
          </div>
          <div>
            {" "}
            <img className="img2" src={require("../images/linkedin.png")} />
          </div>
        </div>
      </div>
    );
  }
}
export default Baselinks;
