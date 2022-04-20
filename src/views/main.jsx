<<<<<<< HEAD
import { useState, React } from "react";
import ButtonCard from "../components/buttoms/ButtonCard";
import Modal from "../components/modal/Modal";
import { useNavigate } from "react-router";
// import { useSession } from "helpers/session/useSession";

=======
import { useSession } from "helpers/session/useSession";
import React from "react";import { useNavigate } from "react-router";
import { useState } from "react";
import ButtonCard from "../components/buttoms/ButtonCard";
import Modal from "../components/modal/Modal";
>>>>>>> ba700fb890da49a868793f1cbd4b68a05cd2166c
export const Main = () => {
  const [onOpen, setOnOpen] = useState(false);
  const navigate = useNavigate();
  // const { logout } = useSession();
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

<<<<<<< HEAD
      {/* <button onClick={() => navigate("/template")}>templates</button> */}
      {/* <button onClick={() => logout()}>logout</button> */}
    </div>
  );
};
=======
    </div>
  );
};

>>>>>>> ba700fb890da49a868793f1cbd4b68a05cd2166c
