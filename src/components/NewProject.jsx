import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Delete</button>
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
