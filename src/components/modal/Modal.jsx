import React from "react";
import reactDom from "react-dom";
import { useState } from "react";

const Modal = ({ onOpen, setOnOpen, children }) => {
  const onClose = (e) => {
    setOnOpen(false);
  };

  return reactDom.createPortal(
    <>
      {onOpen ? (
        <div className="modal-container" onMouseDown={onClose}>
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="button-primary">
              X
            </button>
            {children}
          </div>
        </div>
      ) : null}
    </>,

    document.getElementById("root"),
  );
};

export default Modal;
