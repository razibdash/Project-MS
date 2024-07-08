import React, { useRef } from "react";
import Input from "./Input";

// eslint-disable-next-line react/prop-types
export default function NewProject({ onAdd }) {
  const title = useRef();
  const des = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDes = des.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation
    onAdd({
      title: enteredTitle,
      des: enteredDes,
      dueDate: enteredDueDate,
    });
  }

  const saveButton = "bg-stone-950 text-stone-100 py-1 px-3 rounded m-2";
  return (
    <div className="mt-10">
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
        <Input type="date" ref={dueDate} label="Deu Date" />
      </div>
    </div>
  );
}
