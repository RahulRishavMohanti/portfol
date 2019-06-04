import React, { Component } from "react";
import "./Home.css";
import Bighead from "../components/bighead.jsx";
import Bighead2 from "../components/bighead2.jsx";
import WhiteComp from "../components/whitecomp";
import Scroll from "../components/scroll.jsx";
import Blackcomp from "../components/blackcomp";
import WhiteBanner from "../components/whitebanner";
import WhiteBanner2 from "../components/whitebanner2";
import Grid from "../components/grid";
import Blackcomp2 from "../components/blackcomp2";
import baselinks from "../components/baselinks";
import Baselinks from "../components/baselinks";
class Home extends Component {
  render() {
    return (
      <div >
        <WhiteComp />
        <WhiteBanner
          content="Hello, I am Rahul, Software Developer 
based in India. I work on projects that 
interest me."
        />
        <WhiteBanner2 content="Works at" />
        <Bighead title="RAHUL RISHAV" />
        <Bighead2 title="MOHANTI" />
        <Blackcomp />
        <Blackcomp2 content="VIT" />
        <Baselinks />
        <Grid />
      </div>
    );
  }
}
export default Home;
