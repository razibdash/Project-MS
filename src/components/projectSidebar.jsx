import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <aside className=" w-1/3 px-8 py-16 bg-stone-900 md:w-72 rounded-r-xl">
      <div className="projectTitle">
        <h1 className=" text-2xl mt-5 mb-5 font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h1>
      </div>

      <Button onClick={onStartAddProject} buttonName="+ Add Project" />

      <div className="projectList">
        <ul>this is</ul>
        <ul>this is</ul>
      </div>
    </aside>
  );
}
