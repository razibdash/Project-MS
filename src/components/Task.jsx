import NewTask from "./NewTask";
function Task(props) {
  const { onDelTask, tasks, onAdd, onDelete } = props;
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-600">This project does not any task</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded bg-stone-100">
          {tasks.map((task) => (
            <li className="flex justify-between mt-2" key={task.id}>
              <span>{task.text}</span>
              <button
                onClick={() => onDelTask(task.id)}
                className="text-stone-600 hover:text-red-600"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Task;
