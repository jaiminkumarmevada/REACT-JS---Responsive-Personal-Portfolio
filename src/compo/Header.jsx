import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/canva-logo-cropped.png';
import Moon from '../assets/moon_icon.png';
import { Link } from 'react-scroll';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
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
      
        <button className="contact-button">Contact</button>
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="home-section" smooth={true} duration={500} onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="about-section" smooth={true} duration={500} onClick={toggleSidebar}>About</Link></li>
          <li><Link to="resume-section" smooth={true} duration={500} onClick={toggleSidebar}>Resume</Link></li>
          <li><Link to="projects-section" smooth={true} duration={500} onClick={toggleSidebar}>Projects</Link></li>
          <li><Link to="contact-section" smooth={true} duration={500} onClick={toggleSidebar}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

