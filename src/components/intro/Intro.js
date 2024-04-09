import React from "react";
import "./intro.css"
function Intro() {
  return (
    <div className="main">
      <header className="body">
        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="">
                <h1>Hello</h1>
                <h1>I am <code>Vamshidhar Goud.</code></h1>
                <p className="intro-text">
                  I'm a Data scientist.
                </p>
                <a href="#projects" className="btn btn-primary btn-lg">
                  View My Projects
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Intro;
