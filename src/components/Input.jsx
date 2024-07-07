function Input({ label, textarea, ...porps }) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {textarea ? <textarea {...porps} /> : <input {...porps} />}
    </p>
  );
}

export default Input;
