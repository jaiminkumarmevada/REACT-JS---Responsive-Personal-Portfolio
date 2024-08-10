import React from 'react';
import './Footer.css';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  return (





    <div className="footer">
        <div className="aboveline">
        <div className="logo">
      Jaimin<span id="logo-dot">.</span>
      </div>
            <p>Email at: jaiminkumarmevada@gmail.com</p>
        </div>



        <div className="belowline">
<p>© 2024 Jaimin Mevada. All rights reserved.</p>

        </div>
    </div>
  )
}

export default Footer