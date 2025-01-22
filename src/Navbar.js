import React from 'react';
import { Link } from 'react-scroll';  // Use react-scroll for smooth scrolling
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Left-aligned name */}
        <div className="navbar-left">
          <span className="glowing-text">Vivek Narayanan</span>
        </div>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
