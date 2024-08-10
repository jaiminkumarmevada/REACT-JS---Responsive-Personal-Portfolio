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
      setIsDarkMode(true);
    } else {
      setBgcolor("white");
      setFontColor("black");
      setIsDarkMode(false);
    }
  };

  return (
    <>
      <div id="main-content" style={{ backgroundColor: bgcolor, color: fontColor }}>
        <Header />
        <div id="home-section">
          <Landing />
        </div>
        <div id="about-section">
          <Skills />
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
      </div>
      <button 
        onClick={changebg}
        className="sticky-button"
      >
        {isDarkMode ? <FaSun style={{ color: '#FFE4B5' }} /> : <FaMoon style={{ color: '#FFD700' }} />}
      </button>
    </>
  );
}

export default App;
