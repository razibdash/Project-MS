import React, { useRef } from "react";
import Input from "./Input";

export default function NewProject() {
  const title = useRef();
  const des = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDes = des.current.value;
    const enteredDueDate = dueDate.current.value;
  }

  const saveButton = "bg-stone-950 text-stone-100 p-1 rounded m-2";
  return (
    <div>
      <menu className="flex items-center justify-end">
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className={saveButton}>
            save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="title" />
        <Input ref={des} label="Description" textarea={true} />
        <Input ref={dueDate} label="Deu Date" />
      </div>
    </div>
  );
}
