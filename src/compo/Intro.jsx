import React from "react";
import Skills from "./Skills";
import Jaimin from "../assets/jaimin.jpg";
import "./Intro.css";
import Codeicon from "../assets/small-icons/code-icon.png";
import Projecticon from "../assets/small-icons/project-icon.png";
import Educationicon from "../assets/small-icons/edu-icon.png";
function Intro() {
  return (
    <>
      <Skills />
      <div className="intro-title">
        <p>Introduction</p>
        <p id="aboutme">About Me</p>
      </div>
      <div className="intro">
        <div className="my_image">
          <img src={Jaimin} alt="Jaimin" />
        </div>
        <div className="my_description">
          <p>Hi! I'm Jaimin Mevada,</p>
          <p>
            I am a React-based frontend developer with extensive experience in
            creating dynamic and responsive web applications. My expertise
            includes developing projects using React, and I am well-versed in
            version control with Git and GitHub, ensuring efficient and
            collaborative development workflows.
          </p>
          <div className="cards">
            <div className="card">
              <img src={Codeicon} alt="" />
              <p>
                <strong>Languages</strong>
              </p>

              <p>ReactJs, JavaScript, HTML5, CSS</p>
            </div>
            <div className="card">
              {" "}
              <img src={Educationicon} alt="" />
              <p>
                <strong>Education</strong>
              </p>
              <p>B.Tech in Information Technology</p>
            </div>
            <div className="card">
              {" "}
              <img src={Projecticon} alt="" />
              <p>
                <strong>Projects</strong>
              </p>
              <p>Built reponsive projects</p>
            </div>
          </div>
          <p className="toolsiknow">Tools I know</p>
<div className="tools">



  <div className="tools-div">

<img src="" alt="" />

  </div>
  <div className="tools-div">

<img src="" alt="" />

  </div>
  <div className="tools-div">

<img src="" alt="" />

  </div>
  <div className="tools-div">

<img src="" alt="" />

  </div>
</div>


        </div>
      </div>
    </>
  );
}

export default Intro;
