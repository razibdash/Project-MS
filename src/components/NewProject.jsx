import React, { useRef } from "react";
import Input from "./Input";

export default function NewProject() {
  const title = useRef();
  const des = useRef();
  const dueDate = useRef();

  return (
    <div>
      <menu className="flex items-center justify-end">
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button className="bg-stone-950 text-stone-100 p-1 rounded m-2">
            Delete
          </button>
        </li>
      </menu>
      <div>
        <Input label="title" />
        <Input label="Description" textarea={true} />
        <Input label="Deu Date" />
      </div>
    </div>
  );
}
