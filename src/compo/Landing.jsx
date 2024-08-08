import React from "react";
import './Landing.css';
import RJJ from '../assets/res.png';
import Reactlogo from '../assets/react-logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Landing() {
  return (
    <div className="landing">
      <div className="profile">
       {/* <img src={Reactlogo} alt="Profile" />
        <p>Hi! I'm Jaimin Mevada</p>*/}

<img src={RJJ} alt="Profile" />


       
      </div>
      <div className="tagline">
        <p className="main-tagline">Turning ideas into real life  <br/>products is my calling.</p>
     
        <p className="para-tagline">I am a frontend developer from North Gujarat & I develop reusable UI components with React.</p>
      </div>
      <div className="buttons">
        <button className="contact-me">Contact me <FontAwesomeIcon icon={faEnvelope} /></button>
        <button className="my-resume">My Resume <FontAwesomeIcon icon={faDownload}/></button>
      </div>
    </div>
  );
}

export default Landing;
