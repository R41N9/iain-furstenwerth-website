import React from "react";


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header">
        <img id="avatar" src="./imgs/website-avatar.png" alt="Iain Furstenwerth Avatar"/>
        <h1 id="title">Iain Furstenwerth</h1>
      </div>
    )
  }
}

export default Header;
