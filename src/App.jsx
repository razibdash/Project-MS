import React, { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSected from "./components/NoProjectSected";
import ProjectSidebar from "./components/projectSidebar";
import SelectedProject from "./components/SelectedProject";
function App() {
  //project State
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newTask = {
        text,
        projectId: prevState.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevstate) => {
      return {
        ...prevstate,
        tasks: prevstate.tasks.filter((task) => task.id !== id),
      };
    });
  }
  //this is start add project handler function
  function handleStartAddProject() {
    setProjectState((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: null,
      };
    });
  }
  //in this function handle the cancle project
  function handleCancleAddProjec() {
    setProjectState((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: id,
      };
    });
  }
  function handleDeleteProject() {
    setProjectState((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: undefined,
        projects: prevstate.projects.filter(
          (project) => project.id !== prevstate.selectedProjectId
        ),
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

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
      onDelTask={handleDeleteTask}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancleAddProjec} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-1 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
