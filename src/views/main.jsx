import { useState, React } from "react";
import ButtonCard from "../components/buttoms/ButtonCard";
import Modal from "../components/modal/Modal";
// import { useNavigate } from "react-router";
// import { Template } from "views/Template";
// import { useSession } from "helpers/session/useSession";

export const Main = () => {
  const [onOpen, setOnOpen] = useState(false);
  // const navigate = useNavigate();
  // const { logout } = useSession();
  return (
    <div className="app">
      <button
        className=" button"
        onClick={() => {
          setOnOpen(true);
        }}
      >
        siguiente
      </button>
      {/* put like props two state (onOpen and setOnOpen) that will open or close de modal  */}
      <Modal onOpen={onOpen} setOnOpen={setOnOpen}>
        <button>{/* <Template></Template> */}</button>
      </Modal>

      <ButtonCard size="big" titleButton="ejemplo de deliveri">
        <p>texto de prueba</p>
      </ButtonCard>

      {/* <button onClick={() => navigate("/template")}>templates</button> */}
      {/* <button onClick={() => logout()}>logout</button> */}
    </div>
  );
};
