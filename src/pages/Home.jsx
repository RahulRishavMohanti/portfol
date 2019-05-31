import React, { Component } from "react";
import "./Home.css";
import Bighead from "../components/bighead.jsx";
import Bighead2 from "../components/bighead2.jsx";
import WhiteComp from "../components/whitecomp";
import Scroll from "../components/scroll.jsx";
import Blackcomp from "../components/blackcomp";
import WhiteBanner from "../components/whitebanner";
import Grid from "../components/grid";
class Home extends Component {
  render() {
    return (
      <div>
        <WhiteComp />
        <WhiteBanner
          content="Hello, I am Rahul, Software Developer 
based in India. I work on projects that 
interest me."
        />
        <Bighead title="RAHUL RISHAV" />
        <Bighead2 title="MOHANTI" />
        <Blackcomp />
        <Grid />
      </div>
    );
  }
}
export default Home;
