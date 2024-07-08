import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects }) {
  console.log(projects);
  return (
    <aside className=" w-1/3 px-8 py-16 bg-stone-900 md:w-72 rounded-r-xl">
      <div className="projectTitle">
        <h1 className=" text-2xl mt-5 mb-5 font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h1>
      </div>

      <Button onClick={onStartAddProject} buttonName="+ Add Project" />

      <div className="projectList">
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <button className="bg-stone-900 text-stone-200 uppercase py-1 px-4 w-full text-left rounded shadow-lg hover:bg-stone-800 mt-3">
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
