import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(props, ref) {
  const { children, buttonCaption } = props;
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow "
    >
      {children}
      <form method="diagol">
        <button className="bg-stone-950 text-stone-100 py-1 px-3 rounded m-2">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.querySelector(".modal-root")
  );
});

export default Modal;
