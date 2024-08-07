// src/pages/ConsultantPage.js

import React from 'react';
import projects from './projects';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';

const ConsultantPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Consultant Page</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ConsultantPage;
