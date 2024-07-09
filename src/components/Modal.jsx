import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal(props, ref) {
  const { children, buttonCaption } = props;
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.closeModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow "
    >
      {children}
      <form method="/" className="text-right">
        <Button
          buttonName="Okay"
          className="bg-stone-950 text-stone-100  py-1 px-3 rounded"
        >
          {buttonCaption}
        </Button>
      </form>
    </dialog>,
    document.querySelector(".modal-root")
  );
});

export default Modal;
