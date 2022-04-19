import React from "react";
import reactDom from "react-dom";
import { useState } from "react";

const Modal = ({ onOpen, setOnOpen, children }) => {
  const onClose = () => {
    setOnOpen(false);
  };

  return reactDom.createPortal(
    <>
      {onOpen ? (
        <div className="modal-container" onClick={onClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p onClick={onClose}>X</p>
            {children}
          </div>
        </div>
      ) : null}
    </>,

    document.getElementById("root"),
  );
};

export default Modal;
