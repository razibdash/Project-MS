import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...porps }, ref) {
  const classes = "w-96 p-2 border-b-2 bg-gray-200 shadow rounded mb-2";
  return (
    <p>
      <label className="block uppercase text-stone-700 font-bold">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...porps} />
      ) : (
        <input ref={ref} className={classes} {...porps} />
      )}
    </p>
  );
});
export default Input;
