import React from 'react';
import Header from "./compo/Header";
import Landing from "./compo/Landing";
import Skills from "./compo/Skills";
import Projects from "./compo/Projects";
import Form from './compo/Form';
import Footer from './compo/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div id="home-section">
        <Landing />
      </div>
      <div id="about-section">
        <Skills/>
      </div>

      <div id="resume-section">
        
      </div>
      <div id="projects-section">
        <Projects />
      </div>

      <div id="contact-section">
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default App;

