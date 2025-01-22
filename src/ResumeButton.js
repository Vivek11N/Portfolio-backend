import React from 'react';

function ResumeButton() {
  const resumeId = 1;  // ID of the resume to download

  const downloadResume = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/resume/${resumeId}`);
      if (!response.ok) {
        throw new Error('Failed to download resume');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf'; // You can set the filename dynamically if needed
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="left-align">
      <button className="resume-button" onClick={downloadResume}>
        Download Resume
      </button>
    </div>
  );
}

export default ResumeButton;
