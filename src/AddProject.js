import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);  // To store the image file
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle multipart/form-data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    // Send a POST request to the backend to add a new project
    axios
      .post('/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',  // Set the correct content type
        },
      })
      .then((response) => {
        // After successful submission, navigate back to the projects page
        alert('Project added successfully!');
        navigate('/projects');
      })
      .catch((error) => {
        console.error('Error adding project:', error);
        alert('Error adding project!');
      });
  };

  return (
    <section className="container mt-5">
      <h1 className="text-center mb-4">Add New Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Project Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Project Image</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Project
        </button>
      </form>
    </section>
  );
}

export default AddProject;
