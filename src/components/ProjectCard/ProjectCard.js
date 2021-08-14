import React from "react";
import { FaGithub } from "react-icons/fa";
import "./projectcard.css";
import { IconContext } from "react-icons";

const ProjectCard = ({
  project: { name, image, deployed_url, github_url },
}) => {
  return (
    <div className="projectrCard col-md-6 col-lg-4 my-2">
      <div className="projectCard-wrapper">
        <a href={deployed_url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={name} className="projectCard-image img-fluid" />
        </a>
        <div className="projectCard-title">
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            {/* <img
              src={<FaGithub />
              alt="github link"
              className="projectCard__icon"
            /> */}
            <IconContext.Provider value={{ color: "black", size: "1.7rem" }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
          <a
            href={deployed_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            {name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
