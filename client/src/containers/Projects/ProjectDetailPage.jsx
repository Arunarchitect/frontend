import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
  const { id } = useParams(); // Use the URL parameter name 'id'
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const apiUrl = import.meta.env.VITE_APP_API_URL; // Access environment variable
        console.log('API URL:', apiUrl); // Log the API URL
        console.log('Project ID from URL:', id); // Log the project ID from URL
        
        const response = await fetch(`${apiUrl}/office/projects/`);
        console.log('Response status:', response.status); // Log response status
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log fetched data

        // Convert id to integer for comparison
        const projectIdInt = parseInt(id, 10);
        console.log('Converted project ID:', projectIdInt); // Log the converted project ID

        // Check if projectIdInt is a valid number
        if (isNaN(projectIdInt)) {
          throw new Error('Invalid project ID');
        }

        // Find the project with the matching ID
        const foundProject = data.find(project => project.id === projectIdInt);
        console.log('Found project:', foundProject); // Log the found project

        setProject(foundProject);
      } catch (error) {
        console.error('Fetch error:', error); // Log the error
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p>Loading project details...</p>;
  if (error) return <p>Error loading project details: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      {project ? (
        <div className="project-detail-card">
          <h1 className="text-2xl font-bold">{project.client_name || "Unknown Client"}</h1>
          <img src={project.image || "default-image-url"} alt={`${project.client_name || "project"}'s project`} className="w-full h-auto mt-4" />
          <p><strong>Location:</strong> {project.location || "N/A"}</p>
          <p><strong>Project Type:</strong> {project.project_type || "N/A"}</p>
          <p><strong>Built-up Area:</strong> {project.builtup_area || "N/A"} sq ft</p>
          <p><strong>Project Stage:</strong> {project.project_stage || "N/A"}</p>
          <p><strong>Start Date:</strong> {project.start_date ? new Date(project.start_date).toLocaleDateString() : "N/A"}</p>
          <p><strong>End Date:</strong> {project.end_date ? new Date(project.end_date).toLocaleDateString() : "N/A"}</p>
          <p><strong>Description:</strong> {project.description || "N/A"}</p>
        </div>
      ) : (
        <p>No project details available</p>
      )}
    </div>
  );
};

export default ProjectDetailPage;
