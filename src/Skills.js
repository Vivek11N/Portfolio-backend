import React from 'react';

function Skills() {
  const skills = [
    { name: "React", level: 60, imgSrc: "./1.png" },
    { name: "Node.js", level: 50, imgSrc: "./2.png" },
    { name: "Spring Boot", level: 35, imgSrc: "./3.png" },
    { name: "PostgreSQL", level: 50, imgSrc: "./4.png" },
    { name: "Git", level: 75, imgSrc: "./6.png" },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <img src={skill.imgSrc} alt={skill.name} className="skill-img" />
            <p>{skill.name}</p>
            <div className="skill-level">
              <div
                className="level-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
