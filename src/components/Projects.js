import React from "react";
import ProjectList from "./Projects/ProjectList";

const Projects = () => (
  <div id="Projects">
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
      <ProjectList />
    </div>
  </div>
);

export default Projects;
