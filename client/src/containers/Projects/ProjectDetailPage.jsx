// src/containers/Projects/ProjectDetailPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './projects'; // Adjust the path as needed
import './ProjectDetailPage.css'; // Import the CSS file for animations

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id, 10));

  if (!project) {
    return <div className="text-center mt-10">Project not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-4 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Details</h2>
        <p className="text-gray-600 mt-2">
          <strong>Building Area:</strong> {project.area} sq.ft
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Location:</strong> {project.location}
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Project Stages</h3>
          <div className="flex items-center mt-2">
            <span className={`text-2xl ${project.stages.designing ? 'text-green-600' : 'text-red-600'} ${project.stages.designing ? 'tick-animation' : 'cross-animation'}`}>
              {project.stages.designing ? '✓' : '✗'}
            </span>
            <span className="ml-2 text-gray-600">Designing Stage</span>
          </div>
          <div className="flex items-center mt-2">
            <span className={`text-2xl ${project.stages.execution ? 'text-green-600' : 'text-red-600'} ${project.stages.execution ? 'tick-animation' : 'cross-animation'}`}>
              {project.stages.execution ? '✓' : '✗'}
            </span>
            <span className="ml-2 text-gray-600">Execution Stage</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
