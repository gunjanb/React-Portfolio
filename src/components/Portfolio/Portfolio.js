import React, { useState } from "react";
import projectdata from "../data/projectdata";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./portfolio.css";

export default function Portfolio() {
  const [project, setProjects] = useState(projectdata);

  const handleFilterCategory = (name) => {
    const searchedResults = projectdata.filter((project) =>
      project.category.includes(name)
    );
    setProjects(searchedResults);
  };
  return (
    <div className="container portfolio">
      <div className="project-navbar d-flex justify-content-start ">
        <div className="p-2" onClick={() => setProjects(projectdata)}>
          All
        </div>
        <div className="p-2" onClick={() => handleFilterCategory("React.js")}>
          React
        </div>
        <div className="p-2" onClick={() => handleFilterCategory("MongoDB")}>
          MongoDB
        </div>
        <div className="p-2" onClick={() => handleFilterCategory("Node.js")}>
          Node
        </div>
        <div className="p-2" onClick={() => handleFilterCategory("JS")}>
          JS
        </div>
        <div className="p-2" onClick={() => handleFilterCategory("MySQL")}>
          MySQL
        </div>
      </div>
      <div className="row">
        {project.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
