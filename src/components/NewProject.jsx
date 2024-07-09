import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

// eslint-disable-next-line react/prop-types
export default function NewProject({ onAdd }) {
  const title = useRef();
  const des = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDes = des.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDueDate.trim() === "" ||
      enteredDes.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      des: enteredDes,
      dueDate: enteredDueDate,
    });
  }

  const saveButton = "bg-stone-950 text-stone-100 py-1 px-3 rounded m-2";
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h1 className="text-xl font-bold text-stone-500 mt-4 mb-4">
          Invalid Input
        </h1>
        <p className="text-stone-400 mb-4">
          Oops... look like you forgot to enter a value.
        </p>
        <p className="text-stone-400 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
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
    </>
  );
}
