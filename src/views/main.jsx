import { useSession } from "helpers/session/useSession";
import React from "react";import { useNavigate } from "react-router";
import { useState } from "react";
import ButtonCard from "../components/buttoms/ButtonCard";
import Modal from "../components/modal/Modal";
export const Main = () => {
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
      {/* put like props two state (onOpen and setOnOpen) that will open or close de modal  */}
      <Modal onOpen={onOpen} setOnOpen={setOnOpen}>
        <p>hdkfalshdkj</p>
      </Modal>

      <ButtonCard size="big" titleButton="ejemplo de deliveri">
        <p>texto de prueba</p>
      </ButtonCard>

    </div>
  );
};

