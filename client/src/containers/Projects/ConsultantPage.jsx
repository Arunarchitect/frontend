// src/pages/ConsultantPage.js

import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard'; // Ensure this path is correct based on your project structure
import { useNavigate } from 'react-router-dom';

const ConsultantPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_APP_API_URL; // Access environment variable
        console.log('API URL:', apiUrl); // Log the API URL

        const response = await fetch(`${apiUrl}/office/projects/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Consultant Page</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleCardClick(project.id)}
            />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
};

export default ConsultantPage;
