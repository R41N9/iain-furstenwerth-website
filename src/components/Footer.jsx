import React from "react";


class Footer extends React.Component {

  render() {
    return (
      // footer element to denote role. centered
      <footer id="footer">
        {/* small element to denote small text */}
        <small id="footer-text">&copy; COPYRIGHT IAIN FURSTENWERTH 2021</small>
      </footer>
    )
  }
}

// export component so that other documents can import it
export default Footer;
