import React from "react";
import reactDom from "react-dom";
// onOpen and setOnOpen= is the component that you pass to show or not the modal
// children= what you want to display inside the modal
const Modal = ({ onOpen, setOnOpen, children }) => {
  const onClose = () => {
    setOnOpen(false);
  };

  return reactDom.createPortal(
    <>
      {onOpen && (
        <div className="modal-container" onMouseDown={onClose}>
          <div
            className="modal"
            onSubmit={onClose}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="button-primary">
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>,

    document.getElementById("root"),
  );
};

export default Modal;
