import { useState } from "react";
import { Login } from "components/Login";
import { Register } from "components/Register";

export const ModalSession = () => {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const changeLogin = () => {
    setModalLogin(true);
    setModalRegister(false);
  };
  const changeRegister = () => {
    setModalRegister(true);
    setModalLogin(false);
  };

  return (
    <div className="" style={{ textAlign: "center" }}>
      {modalLogin ? (
        <Login></Login>
      ) : (
        <button className="button" onClick={changeLogin}>
          iniciar sesión
        </button>
      )}
      {modalRegister ? (
        <Register></Register>
      ) : (
        <button className="button secondary-button" onClick={changeRegister}>
          registrarse
        </button>
      )}
    </div>
  );
};
