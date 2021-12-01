import React from "react";


class Header extends React.Component {

  render() {
    return (
      // this element is a flex box
      <div id="header">
        {/* 20% flex basis and first with justify-content (flexbox) set to flex-start so it will show up on the far left. 70% flex basis and justify-content center on mobile, to make it slightly smaller than the width of the viewport and stack on top of the title */}
        <img id="avatar" src="./imgs/website-avatar.png" alt="Iain Furstenwerth Avatar"/>
        {/* i wanted the title and subtitle to be stacked. so i put them in a div, and set the flex-basis (flexbox width) to 100% to make the title span the whole width of the direct parent div, so the subtitle doesn't show up on the same line. the flex-basis of the subtitle doesn't matter after you do the first part. they're also centered */}
        <div id="title-subtitle">
          <h1 id="title">Iain Furstenwerth</h1>
          <h2 id="subtitle">Full Stack Developer</h2>
        </div>
      </div>
    )
  }
}

// export component so that other documents can import it
export default Header;
