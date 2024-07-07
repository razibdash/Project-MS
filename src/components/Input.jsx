function Input({ label, textarea, ...porps }) {
  return (
    <p>
      <label className="block uppercase text-stone-700 font-bold">
        {label}
      </label>
      {textarea ? (
        <textarea
          className="w-96 p-2 bg-gray-200 shadow rounded mb-2"
          {...porps}
        />
      ) : (
        <input
          className="w-96 p-2 bg-gray-200 shadow rounded mb-3"
          {...porps}
        />
      )}
    </p>
  );
}

export default Input;
