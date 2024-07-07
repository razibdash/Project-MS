export default function ProjectSidebar() {
  return (
    <aside className=" w-1/3 px-8 py-16 bg-stone-900 md:w-72 rounded-r-xl">
      <div className="projectTitle">
        <h1 className=" text-2xl mt-5 mb-5 font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h1>
      </div>

      <div className="addProjectButton mt-10 mb-10">
        <button className="border rounded py-2 px-4 md:text-base bg-stone-600 text-stone-300 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>

      <div className="projectList">
        <ul>this is</ul>
        <ul>this is</ul>
      </div>
    </aside>
  );
}
