import React from "react";

export default function Button({ buttonName, ...porps }) {
  return (
    <div className="mt-10 mb-10">
      <button
        className="border rounded py-2 px-4 md:text-base bg-stone-600 text-stone-300 hover:bg-stone-600 hover:text-stone-100"
        {...porps}
      >
        {buttonName}
      </button>
    </div>
  );
}
