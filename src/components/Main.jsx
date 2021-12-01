import React from "react";
import ReactDOM from "react-dom";


class Main extends React.Component {

  render() {
    return (
      <div id="main">Hello from yourself!</div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));