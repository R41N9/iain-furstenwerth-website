import React from "react";

class Skills extends React.Component {

  render() {
    return (
      <div id="skills" className="content-box">
        <h2 id="skills-title">Skills</h2>
        <h3 id="front-end-title">Front End</h3>
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
        <ul id="testing-deployment">
          <li id="jest">Jest</li>
          <li id="mocha-chai">Mocha / Chai</li>
          <li id="aws">AWS: EC2</li>
        </ul>
        <h3 id="dev-tools-title">Developer Tools</h3>
        <ul id="dev-tools">
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

export default Skills;
