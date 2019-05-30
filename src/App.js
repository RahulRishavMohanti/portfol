import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
