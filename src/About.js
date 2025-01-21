import React from 'react';
import './About.css'; // Import the custom CSS file for styling

function About() {
  const resumeUrl = '/path-to-your-resume/resume.pdf';

  // Skill levels (from 0 to 100)
  const skills = [
    { name: "React", level: 60, imgSrc: "./1.png" },
    { name: "Node.js", level: 50, imgSrc: "./2.png" },
    { name: "Spring Boot", level: 35, imgSrc: "./3.png" },
    { name: "PostgreSQL", level: 50, imgSrc: "./4.png" },
    { name: "Git", level: 75, imgSrc: "./6.png" }
  ];

  return (
    <section className="container mt-5">
      <h1 className="about-heading">About Me</h1>
      <p className="about-text">
        Hello, I'm Vivek, a passionate developer with a love for building amazing projects. With a background in software development, I specialize in creating scalable and efficient applications using modern technologies like React, Node.js, and Spring Boot. I have a keen interest in problem-solving and continuously learning new technologies to stay up-to-date with the latest industry trends. Whether it's designing a seamless user experience or optimizing backend performance, I strive for excellence in every project I take on. In addition to my technical skills, I believe in the power of collaboration and enjoy working with cross-functional teams to bring ideas to life. Outside of development, I enjoy reading tech blogs, exploring new programming languages, and contributing to open-source projects.
      </p>
      
      {/* Education Section */}
      <section className="education">
        <h2>Education</h2>
        <p>Bachelor's Degree in Computer Science - XYZ University (2018 - 2022)</p>
        <p>Relevant Coursework: Data Structures, Algorithms, Web Development, etc.</p>
      </section>

      {/* Skills Section with Grid Layout */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <img src={skill.imgSrc} alt={skill.name} className="skill-img" />
              <p>{skill.name}</p>
              {/* Skill Level Bar */}
              <div className="skill-level">
                <div 
                  className="level-bar"
                  style={{ width: `${skill.level}%` }} // Dynamic width based on skill level
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2>Experience</h2>
        <p>Software Developer Intern - ABC Company (2021 - 2022)</p>
        <ul>
          <li>Worked on developing and maintaining React-based web applications.</li>
          <li>Collaborated with the backend team to integrate APIs and optimize performance.</li>
          <li>Utilized Git for version control and participated in daily stand-ups.</li>
        </ul>
      </section>

      <div className="left-align">
        <a href={resumeUrl} download>
          <button className="resume-button">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;
