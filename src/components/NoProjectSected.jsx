/* eslint-disable react/prop-types */
import no from "../assets/no.png";
import Button from "./Button";

export default function NoProjectSected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={no} alt="" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 mt-4 mb-4">
        No Project Selected!
      </h2>
      <p className="text-stone-400 mb-4">
        select a project or get started whit a new one
      </p>
      {/* <p className="mt-4">
        <button>Create new project</button>
      </p> */}
      <Button onClick={onStartAddProject} buttonName="Create new project" />
    </div>
  );
}
