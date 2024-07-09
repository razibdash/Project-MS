import React, { useState } from "react";
import Modal from "./Modal";

function NewTask(props) {
  const { onAdd } = props;
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        className="w-64 rounded outline-none px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-50 px-2 py-1 rounded hover:text-stone-100 hover:bg-stone-700 bg-stone-900"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
