import React, { useState } from "react";
import projectdata from "../data/projectdata";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./portfolio.css";
import { motion } from "framer-motion";

const portfolio_variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

export default function Portfolio() {
  const [project, setProjects] = useState(projectdata);

  const handleFilterCategory = (name) => {
    const searchedResults = projectdata.filter((project) =>
      project.category.includes(name)
    );
    setProjects(searchedResults);
  };
  return (
    <motion.div
      className="container portfolio"
      variants={portfolio_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="project-navbar d-flex justify-content-start ">
        <div
          className="proj-navbar-item"
          onClick={() => setProjects(projectdata)}
        >
          All
        </div>
        <div
          className="proj-navbar-item"
          onClick={() => handleFilterCategory("React.js")}
        >
          React
        </div>
        <div
          className="proj-navbar-item"
          onClick={() => handleFilterCategory("MongoDB")}
        >
          MongoDB
        </div>
        <div
          className="proj-navbar-item"
          onClick={() => handleFilterCategory("Node.js")}
        >
          Node
        </div>
        <div
          className="proj-navbar-item"
          onClick={() => handleFilterCategory("JS")}
        >
          JS
        </div>
        <div
          className="proj-navbar-item"
          onClick={() => handleFilterCategory("MySQL")}
        >
          MySQL
        </div>
      </div>
      <div className="row">
        {project.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
