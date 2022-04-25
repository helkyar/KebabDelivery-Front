import { useState, React, useEffect } from "react";
import ButtonCard from "../components/buttoms/ButtonCard";
import Modal from "../components/modal/Modal";
import { useNavigate } from "react-router";
import { Template } from "views/Template";
import { useSession } from "helpers/session/useSession";
import { Destination } from "components/destiny/Destination";

export const Main = () => {
  const [onOpen, setOnOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useSession();

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1 className="logo">kometa</h1>
        </div>
      </header>
      <div className="search">
        <input type="text" placeholder="N seguimiento" />
        <button className="button button-search">buscar</button>
      </div>

      {/* <button
        className=" button"
        onClick={() => {
          setOnOpen(true);
        }}
      >
        iniciar sesion
      </button> */}
      {/* put like props two state (onOpen and setOnOpen) that will open or close de modal  */}
      {/* <Modal onOpen={onOpen} setOnOpen={setOnOpen}>
        <h1>contenido del modal</h1>
        <button>
          <Template />
        </button>
      </Modal> */}

      <ButtonCard size="big" titleButton="hacer delivery">
        <Destination />
      </ButtonCard>

      {/* <button onClick={() => navigate("/template")}>templates</button>
      <button onClick={() => logout()}>logout</button> */}
    </div>
  );
};
