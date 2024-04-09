import React, { useState } from "react";
import projects from "./Projects";
import "./projects.css";

function ProjectPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="project">
      {projects.map((proj, index) => (
        <div
          key={index}
          className={`image-container ${index === activeIndex ? "active" : ""}`}
          onClick={() => handleImageClick(index)}
        >
          <img src={proj.img} alt={`Project ${index}`} />
          {index === activeIndex && (
            <div className="info">
              <h1>{proj.title}</h1>
              <h3>{proj.techs}</h3>
              <a href={proj.link} target="_blank">
                <button>Visit Website</button>
              </a>
              <a href={proj.gitlink} target="_blank">
                <button>Github Repo</button>
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectPage;
