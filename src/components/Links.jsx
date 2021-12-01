import React from "react";


class Links extends React.Component {

  render() {
    return (
      // flex box, but not used.
      <div id="links" className="content-box">
        {/* centered */}
        <h2 id="links-title">Links</h2>
        {/* space between anchor elements, because this is a small element compared to the rest of the page */}
        <a id="github-link" href="https://github.com/R41N9?tab=repositories">My Github</a>
        <a id="linkedin-link" href="https://www.linkedin.com/in/iain-furstenwerth-0a8207209/">My LinkedIn</a>
        <a id="resume-link" href="https://docs.google.com/document/d/1gUOmNSumhJv9MRmKMjGHBFGsf84hKvVEiN2ufQvkVIs/edit?usp=sharing">My Resume</a>
      </div>
    )
  }
}

// export component so that other documents can import it
export default Links;
