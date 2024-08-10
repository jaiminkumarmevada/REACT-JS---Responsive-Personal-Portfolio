import React from "react";
import './Landing.css';

import RJJ from '../assets/braces_logo.png';
import { Link } from 'react-scroll';
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
        <p className="main-tagline">

       
Building Elegant, Efficient Frontend <br/>Experiences
 with React Expertise</p>
     
        <p className="para-tagline">I am a frontend developer from North Gujarat & I develop reusable UI components with React.</p>
      </div>
      <div className="buttons">



      <Link to="contact-section" smooth={true} duration={3000}>



        <button className="contact-me">Contact me <FontAwesomeIcon icon={faEnvelope} /></button>
        </Link>  
        
        
        <a href="https://drive.google.com/file/d/11mkMjIq3PUZFoyP8sgClWJ8Shw_mbsGe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="my-resume">My Resume <FontAwesomeIcon icon={faDownload}/></button>
  </a>
        
        
        
        
          
      </div>
    </div>
  );
}

export default Landing;
