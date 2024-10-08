import React from 'react';
import './Project.css';


import Card from "./projects-cards/Card";
function Projects() {
  return (
    <div className="projects">
      <div className="project-title">
        <p>My portfolio</p>
        <p id="project-main-title">My latest work</p>
        <p>Each project reflects my dedication to creating dynamic,<br/> responsive, and user-friendly interfaces. Dive in to see how I bring ideas to life through code!</p>
      </div>
      <div className="projects-cards">
        <div className="project-card">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Projects;



