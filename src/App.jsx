import React, { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSected from "./components/NoProjectSected";
import ProjectSidebar from "./components/projectSidebar";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectState((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: null,
      };
    });
  }
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-1 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
