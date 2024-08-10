import React, { useState } from 'react';
import './Header.css';
import ContactPopup from './ContactPopup';
import { Link } from 'react-scroll';

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);

    // Add or remove blur class to the main content
    if (!isPopupOpen) {
      document.getElementById('main-content').classList.add('blur');
    } else {
      document.getElementById('main-content').classList.remove('blur');
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          Jaimin<span id="logo-dot">.</span>
        </div>
        <div className="navigation-list">
          <ul>
            <li><Link to="home-section" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about-section" smooth={true} duration={500}>About</Link></li>
            <li><Link to="resume-section" smooth={true} duration={500}>Resume</Link></li>
            <li><Link to="projects-section" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="contact-section" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>
        <div className="right-buttons">
          <button className="contact-button" onClick={togglePopup}>Contact</button>
        </div>
      </div>
      <ContactPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </>
  );
}

export default Header;



