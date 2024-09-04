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
      {/* Display the project image */}
      <img 
        src={project.image} 
        alt={project.client_name} 
        className="w-full h-48 object-cover rounded-lg mb-2" 
      />
      {/* Display project details */}
      <h2 className="text-xl font-semibold truncate">{project.client_name}</h2>
      <p className="text-gray-600 truncate">Built-up Area: {project.builtup_area} sq.ft</p>
      <p className="text-gray-600 truncate">Location: {project.location}</p>
      <p className="text-gray-600 truncate">Project Type: {project.project_type}</p>
      <p className="text-gray-600 truncate">Project Stage: {project.project_stage}</p>
      <p className="text-gray-600 truncate">Start Date: {project.start_date}</p>
      <p className="text-gray-600 truncate">End Date: {project.end_date}</p>
      <p className="text-gray-600 truncate">Description: {project.description}</p>
    </div>
  );
};

export default ProjectCard;
