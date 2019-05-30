import React, { Component } from "react";
import "./blackcomp.css";
class Blackcomp extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      opac: 1
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY > 1273) {
      var x = window.scrollY / 5000;
      this.setState({ opac: 1 - x });
    } else {
      this.setState({ opac: 1 });
    }
  }
  render() {
    return <div className="bc" style={{ opacity: this.state.opac }} />;
  }
}
export default Blackcomp;
