import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Projects from './Project';
import Contact from './Contact';
import Home from './Home';
import './App.css'; // Make sure your App.css is properly imported

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content"> {/* Ensure all content is in this div */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
