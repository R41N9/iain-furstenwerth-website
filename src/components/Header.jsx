import React from "react";


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header">
        <img id="avatar" src="./imgs/website-avatar.png" alt="Iain Furstenwerth Avatar"/>
        <div id="title-subtitle">
          <h1 id="title">Iain Furstenwerth</h1>
          <h2 id="subtitle">Full Stack Developer</h2>
        </div>
      </div>
    )
  }
}

export default Header;
