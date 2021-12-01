import React from "react";


class Projects extends React.Component {

  render() {
    return (
      // flexbox. all content-box class elements are 100% flex-basis in the mobile stylesheet, so they stack vertically instead of horizontally.
      <div id="projects" className="content-box">
        {/* centered. h2 elements automatically have some margin, so it took no effort for all the spaces between the h2's and the content to be the same. */}
        <h2 id="projects-title">Projects</h2>
        {/* flex basis 80% makes link-group class elements slightly smaller than the parent, but a ul automatically styles margin and padding on li's. so i added a margin around each link-group class element to keep it off the border. */}
        <div id="ss-group" className="link-group">
          <a id="ss-link" href="http://18.191.240.161:80/">Stacks &amp; Scales - Freelance</a>
          <ul id="ss-desc">
            <li id="ss-bz-type">Record label</li>
            <li id="ss-job-desc">Make a site for a friend's record label. Include artists, free downloads, links to social media, and contact. Colors: black and gold.</li>
            <li id="ss-more-info">This site is complete for both mobile and desktop. Real info and downloads have not been provided yet, this is a recent project: just a layout so far. Contact form sends to my email.</li>
          </ul>
        </div>
        <div id="ze-group" className="link-group">
          <a id="ze-link" href="http://3.138.202.205:80/">Zo&euml; Emery - Personal Project</a>
          <ul id="ze-desc">
            <li id="ze-bz-type">Musician</li>
            <li id="ze-job-desc">I offered to make a website. Must include page for art.</li>
            <li id="ze-more-info">This site is currently not complete. Recently, an art page was added to the requirements, and that feature is not yet operational. Current deployed site is optimized for mobile and desktop.</li>
          </ul>
        </div>
        <div id="pc-group" className="link-group">
          <a id="pc-link" href="https://github.com/SDC-Team-Kronk/Reviews">Project Catwalk - Backend Project</a>
          <ul id="pc-desc">
            <li id="pc-bz-type">Hack Reactor backend project</li>
            <li id="pc-job-desc">Design a piece of a backend for an existing fashion website. We developed the front end from a set of business requirements.</li>
            <li id="pc-more-info">I did the Reviews section. Must be able to sort by three different metrics, one of which is a combination of the other two. Must have GET,PUT and POST functionality. I optimized the GET requests to 8.21ms for the list of reviews and 4.32ms for metadata during stress testing. PUT requests were down to 8.31ms and POST requests were down to 9.57ms before we moved on to the next project.</li>
          </ul>
        </div>
      </div>
    )
  }
}

// export component so other documents can import it
export default Projects;
