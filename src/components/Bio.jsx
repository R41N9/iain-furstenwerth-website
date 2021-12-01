import React from "react";


class Bio extends React.Component {

  render() {
    return (
      <div id="bio" className="content-box">
        <h2 id="bio-title">About Me</h2>
        <p id="bio-content-work">At work, I am a focused person, with a mind always looking for ways to improve the system. I have learned that the success of a team is due to the relationships of its players as much as their knowledge and skills. In my first few weeks on a team, I put aside time to meet and relate with my teammates, find out their strengths and weaknesses, and create my role as a cog in this new machine. While actively coding, I like to test each element and feature as I write them, and cut out as large of a chunk of time as possible to work on a single project. While multitasking is a necessary skill in this industry, I find that minimizing my code-switching between projects adds to my overall productivity. In relations with coworkers, superiors, subordinates, and clients, I create a space of clear communication and calm over the course of our relationship.</p>
        <p id="bio-content-leisure">Outside of work, I am adventurous and inquisitive. One of my favorite pastimes is D&amp;D, as well as almost any other roleplaying game. I love to solve new puzzles, ponder and discuss moral quandaries, and visit new places - as well as enjoying the places and values I have figured out for myself. When meeting new people I ask lots of questions, and reply with an answer of my own. I find this gives us a chance to find common ground. As with my work, I am very direct and focused in my search for new experiences. If it seems like I'm wasting my time, it's because I'm borderline burnt-out from my vigorous adventuring. I will never miss a chance to tell a good story.</p>
      </div>
    )
  }
}

export default Bio;
