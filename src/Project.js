import React from 'react';

function Projects() {
  return (
    <section className="container mt-5">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">A personal website to showcase my skills and projects.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">E-Commerce App</h5>
              <p className="card-text">An online store with product listings, shopping cart, and checkout.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blogging Platform</h5>
              <p className="card-text">A platform for users to create and share blog posts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
