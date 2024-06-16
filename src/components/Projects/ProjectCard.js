import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold text-black">{project.title}</h2>
      <p className="text-gray-700 mt-2">{project.description}</p>
      <a
        href={project.link}
        className="text-blue-500 hover:underline mt-2 block"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
