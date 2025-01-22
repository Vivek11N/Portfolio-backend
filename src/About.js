import React from 'react';
import AboutText from './AboutText';

import Skills from './Skills';
import Experience from './Experience';
import ResumeButton from './ResumeButton';
import './About.css'; // Custom CSS for styling

function About() {
  return (
    <section className="container mt-5">
      <AboutText />
      <ResumeButton />
      <Skills />
      
      
    </section>
    
  );
}

export default About;
