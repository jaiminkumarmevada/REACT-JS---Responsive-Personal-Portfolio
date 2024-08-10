import React, { useState } from 'react';
import Header from "./compo/Header";
import Landing from "./compo/Landing";
import Skills from "./compo/Skills";
import Projects from "./compo/Projects";
import Intro from "./compo/Intro";
import Form from './compo/Form';
import Footer from './compo/Footer';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';

function App() {
  const [bgcolor, setBgcolor] = useState("white"); 
  const [fontColor, setFontColor] = useState("black"); 
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const changebg = () => {
    if (bgcolor === "white") {
      setBgcolor('#11001f'); 
      setFontColor("white"); 
      setIsDarkMode(true); // Set to dark mode
    } else {
      setBgcolor("white"); 
      setFontColor("black"); 
      setIsDarkMode(false); // Set to light mode
    }
  };

  return (
    <>
      <div style={{ backgroundColor: bgcolor, color: fontColor }}> 
        <Header />
        <div id="home-section">
          <Landing />
        </div>
        <Skills />
        <div id="about-section">
         
          <Intro />
        </div>
        <div id="resume-section"></div>
        <div id="projects-section">
          <Projects />
        </div>
        <div id="contact-section">
          <Form />
        </div>
        <Footer />

        <div>
          <button 
            className="sticky-button" 
            onClick={changebg} 
            style={{
              backgroundColor: isDarkMode ? '#9B59B6' : '#5B2C6F',  // Lighter purple for dark mode, deeper purple for light mode
              color: isDarkMode ? '#FFE4B5' : '#FFD700', // Light gold for sun, bright gold for moon
              borderRadius: '50%', // Round button
              padding: '20px',  // Further increase padding for a bigger button
              fontSize: '28px', // Larger icon size
              border: '2px solid #D3B8E6', // Border to match purple theme
              cursor: 'pointer',
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.35)', // More pronounced shadow for depth
              transition: 'all 0.3s ease', // Smooth transition for all properties
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          > 
            {isDarkMode ? <FaSun style={{ color: '#FFE4B5' }} /> : <FaMoon style={{ color: '#FFD700' }} />} {/* Toggle icon with custom color */}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;



