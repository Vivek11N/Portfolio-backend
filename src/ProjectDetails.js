import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();  // Get the project ID from the URL
  const projectDetails = {
    1: { name: 'Portfolio Website', description: 'A personal website to showcase my skills and projects.' },
    2: { name: 'E-Commerce App', description: 'An online store with product listings, shopping cart, and checkout.' },
    3: { name: 'Blogging Platform', description: 'A platform for users to create and share blog posts.' }
  };

  const project = projectDetails[id];

  return (
    <section className="container mt-5">
      <h1 className="text-center mb-4">{project ? project.name : 'Project Not Found'}</h1>
      {project ? (
        <div className="project-detail">
          <h2>Description</h2>
          <p>{project.description}</p>
        </div>
      ) : (
        <p>Project details not found.</p>
      )}
    </section>
  );
}

export default ProjectDetail;
