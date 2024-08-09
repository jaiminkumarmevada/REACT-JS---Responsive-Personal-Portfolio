import React, { useState } from 'react';
import Header from "./compo/Header";
import Landing from "./compo/Landing";
import Skills from "./compo/Skills";
import Projects from "./compo/Projects";
import Intro from "./compo/Intro";
import Form from './compo/Form';
import Footer from './compo/Footer';
import './App.css';

function App() {
  const [bgcolor, setBgcolor] = useState("white"); // Initial background color is white
  const [fontColor, setFontColor] = useState("black"); // Initial font color is black

  const changebg = () => {
    if (bgcolor === "white") {
      setBgcolor('#11001f'); // Set background to dark color
      setFontColor("white"); // Set font color to white
    } else {
      setBgcolor("white"); // Set background back to white
      setFontColor("black"); // Set font color back to black
    }
  };

  return (
    <>
      <div style={{ backgroundColor: bgcolor, color: fontColor }}> {/* Apply both background and font color */}
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
        {/* Button to change background and font color */}
        <div>
          <button className="sticky-button" onClick={changebg}> {/* onClick handler toggles colors */}
            Toggle Mode
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
