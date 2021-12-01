import React from "react";

class Skills extends React.Component {

  render() {
    return (
      // flexbox, also not used here. i'm using the content-box class for other things as well, like border and margin.
      <div id="skills" className="content-box">
        {/* centered */}
        <h2 id="skills-title">Skills</h2>
        {/* centered */}
        <h3 id="front-end-title">Front End</h3>
        {/* skills-list class elements are set to align-self (flexbox) flex-start to take them out of the align-items center set on the parent. i wanted the bullets to line up on the left instead of just centering every line. also added a padding-left to space them from the border */}
        <ul id="front-end" className="skills-list">
          <li id="js">Javascript (ES5 and ES6)</li>
          <li id="html">HTML5</li>
          <li id="css">CSS3</li>
          <li id="react">React (+ hooks)</li>
          <li id="redux">Redux</li>
          <li id="material-ui">Material-UI</li>
        </ul>
        <h3 id="back-end-title">Back End</h3>
        <ul id="back-end" className="skills-list">
          <li id="node">Node.js</li>
          <li id="express">Express JS</li>
          <li id="mysql">MySQL</li>
          <li id="postgres">PostgreSQL</li>
          <li id="rest">REST API</li>
        </ul>
        <h3 id="testing-deployment-title">Testing/Deployment</h3>
        <ul id="testing-deployment" className="skills-list">
          <li id="jest">Jest</li>
          <li id="mocha-chai">Mocha / Chai</li>
          <li id="aws">AWS: EC2</li>
        </ul>
        <h3 id="dev-tools-title">Developer Tools</h3>
        <ul id="dev-tools" className="skills-list">
          <li id="vim">Vim</li>
          <li id="git">Git</li>
          <li id="npm">npm</li>
          <li id="webpack">Webpack</li>
          <li id="babel">Babel</li>
          <li id="agile">Agile</li>
          <li id="tdd">TDD</li>
        </ul>
      </div>
    )
  }
}

// export component so that other documents can import it
export default Skills;
