import React, { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSected from "./components/NoProjectSected";
import ProjectSidebar from "./components/projectSidebar";
function App() {
  //project State
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  //this is start add project handler function
  function handleStartAddProject() {
    setProjectState((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: null,
      };
    });
  }
  //in this fuction handle the add project
  function handleAddProject(projectDate) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectDate,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...projectState.projects, newProject],
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSected onStartAddProject={handleStartAddProject} />;
  }

  console.log(projectState);
  return (
    <main className="h-screen my-1 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
