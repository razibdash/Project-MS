import React from "react";
import Task from "./Task";

export default function SelectedProject({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
  onDelTask,
}) {
  const { title, dueDate, des } = project;

  const formatedDate = new Date(dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-200">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <button
            onClick={onDeleteProject}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{des}</p>
      </header>
      <Task
        onDelTask={onDelTask}
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        tasks={tasks}
      />
    </div>
  );
}
