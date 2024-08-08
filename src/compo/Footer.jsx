import React from 'react';
import './Footer.css';
import logo from '../assets/canva-logo-cropped.png';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  return (





    <div className="footer">
        <div className="aboveline">
            <img id="footer-logo" src={logo}alt="none" />
            <p><FontAwesomeIcon icon={faEnvelope} /> jaiminkumarmevada@gmail.com</p>
        </div>


        <hr/>
        <div className="belowline">
<p>© 2024 Jaimin Mevada. All rights reserved.</p>
<ul>
    <li><FontAwesomeIcon icon={faGithub} /> Github</li>
    <li><FontAwesomeIcon icon={faLinkedin} /> Linkdin</li>
    
</ul>
        </div>
    </div>
  )
}

export default Footer