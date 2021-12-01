import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Projects from "./Projects.jsx";
import Bio from "./Bio.jsx";
import Skills from "./Skills.jsx";
import Footer from "./Footer.jsx";


class Main extends React.Component {

  render() {
    return (
      <div id="main">
        <Header />
        <div id="content-wrapper">
          <Projects />
          <Bio />
          <Skills />
        </div>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
