import "./App.css";
import ProjectPage from "./components/ProjectPage";
import Intro from "./components/intro/Intro";
function App() {
  return (
    <div>
      <Intro />
      <div id="projects" className="projects">
        <ProjectPage />
      </div>
    </div>
  );
}

export default App;
