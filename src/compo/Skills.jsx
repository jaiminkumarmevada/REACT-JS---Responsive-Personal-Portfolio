import React from 'react';
import './skills.css';
import Github from '../assets/logos/github.webp';
import HTML from '../assets/logos/HTML.png';
import CSS from '../assets/logos/css.png';
import Git from '../assets/logos/git.png';
import MongoDB from '../assets/logos/mongodb.webp';
import Javascript from '../assets/logos/JS.png';
import Reactjs from '../assets/logos/react.png';
import Skillsbg from '../assets/skillsbg.png';

function Skills() {
  return (


    <>
<div className="skills">
  <p id="skilltagline">My Tech Stack</p>
  <p > Technologies I’ve been working with recently</p>
    <div className="skillslogo">
      <img src={HTML} alt="HTML" />
      <img src={CSS} alt="CSS" />
      <img src={Javascript} alt="JavaScript" />
      <img src={Reactjs} alt="React" />
      <img src={Git} alt="Git" />
      <img src={Github} alt="GitHub" />
    </div></div>
    </>
  );
}

export default Skills;
