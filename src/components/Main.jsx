import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Projects from "./Projects.jsx";
import Bio from "./Bio.jsx";
import Skills from "./Skills.jsx";
import Links from "./Links.jsx";
import Footer from "./Footer.jsx";


class Main extends React.Component {
  // if this element was receiving props, we would set up a constructor function here, with a parameter of props; inside it we'd call super, passing in props. but it's not, so we're not. true of all components in this app

  render() {
    return (
      // have to wrap all siblings in a single parent element to render with react.
      <div id="main">
        <Header />
        {/* here, i'm using flexbox on content-wrapper. align-items is set to flex-start so that the elements begin just below the header. */}
        <div id="content-wrapper">
          <Projects />
          <Bio />
          <Skills />
          <Links />
        </div>
        <Footer />
      </div>
    )
  }
}

// in webpack config, i told the site to immediately run this file on page load. when this file runs, it renders the element <Main /> in the element with the id "root" on index.html
ReactDOM.render(<Main />, document.getElementById("root"));
