import React from "react";
import Button from "react-bootstrap/Button";

import "./intro.css";
function Intro() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main">
      <header className="body">
        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="">
                <h1>Hello</h1>
                <h1>
                  I am <code>Vamshidhar Goud.</code>
                </h1>
                <p className="intro-text">
                  Experienced Data Scientist specializing in GenAI, Google Cloud
                  Platform (GCP), and Microsoft Azure. Skilled in advanced
                  machine learning and deep learning for AI solutions.
                  Collaborative team player driving data-driven insights and
                  business outcomes.
                </p>
                <Button variant="outline-danger" size="lg" onClick={scrollToProjects}>
                  View Projects
                </Button>{" "}
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Intro;
