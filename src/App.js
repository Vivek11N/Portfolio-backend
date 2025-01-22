import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Projects from './Project';
import Contact from './Contact';
import Home from './Home';
import './App.css';  // Ensure your App.css is properly imported
import AddProject from './AddProject';
import 
function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
          <AddProject />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
