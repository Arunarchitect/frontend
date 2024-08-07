// src/components/ProjectCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetailPage.css'; // Import the CSS file for animations

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-200 transition"
      onClick={handleClick}
    >
      <h2 className="text-xl font-semibold truncate">{project.name}</h2>
      <p className="text-gray-600 truncate">Building Area: {project.area} sq.ft</p>
      <p className="text-gray-600 truncate">Location: {project.location}</p>
      <div className="mt-2">
        <div className="flex items-center">
          <span className={`text-xl ${project.stages.designing ? 'text-green-600 tick-animation' : 'text-red-600 cross-animation'}`}>
            {project.stages.designing ? '✓' : '✗'}
          </span>
          <span className="ml-2 text-gray-600">Designing Stage</span>
        </div>
        <div className="flex items-center mt-2">
          <span className={`text-xl ${project.stages.execution ? 'text-green-600 tick-animation' : 'text-red-600 cross-animation'}`}>
            {project.stages.execution ? '✓' : '✗'}
          </span>
          <span className="ml-2 text-gray-600">Execution Stage</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
