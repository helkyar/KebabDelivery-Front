import React from "react";
import { useState } from "react";
import Modal from "../components/modal/Modal";

const Main = () => {
  const [onOpen, setOnOpen] = useState(false);
  return (
    <div className="app">
      <button
        onClick={() => {
          setOnOpen(true);
        }}
      >
        modal
      </button>
      {/* put like posps two state (onOpen and setOnOpen) tha defined in this componente  */}
      <Modal onOpen={onOpen} setOnOpen={setOnOpen}>
        hola
      </Modal>
    </div>
  );
};
export default Main;
