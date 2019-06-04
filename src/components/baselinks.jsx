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
    if (window.scrollY > 2579) {
      var mass = Math.max(0, -0.7737 + 0.0003 * window.scrollY);
      this.setState({ opac: mass });

      console.log("Opacity");
      console.log(this.state.opac);
    } else {
      this.setState({ opac: 0 });
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
            <a href="https://www.instagram.com/minimal_dev/">
              <img className="img3" src={require("../images/insta.png")} />
            </a>
          </div>
          <div>
            <a href="https://github.com/RahulRishavMohanti">
              <img className="img3" src={require("../images/git.png")} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/rahul-rishav-mohanti-98aaaa138/">
              <img className="img3" src={require("../images/linkedin.png")} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Baselinks;
