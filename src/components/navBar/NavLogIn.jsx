import { Login } from "components/Login";
import Modal from "components/modal/Modal";
import { Register } from "components/Register";
import { useState, useEffect, useContext } from "react";
import Context from "contexts/user";
import { useSession } from "helpers/session/useSession";
import { useNavigate } from "react-router-dom";
const useModal = () => {
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const openLogIn = () => {
    setLogIn(!logIn);
  };
  const openSignUp = () => {
    setSignUp(!signUp);
  };
  return { openLogIn, openSignUp, logIn, signUp };
};

const NavLogIn = () => {
  const { openLogIn, openSignUp, logIn, signUp } = useModal();
  const { jwt, user } = useContext(Context);
  const navigate = useNavigate();
  const { logout } = useSession();

  return (
    <>
      {jwt ? (
        <div className="container-log">
          <p onClick={logout}>Log out </p>
          <p onClick={() => navigate("/profile")}>Profile </p>
        </div>
      ) : (
        <>
          <Modal onOpen={logIn} setOnOpen={openLogIn}>
            <Login />
          </Modal>
          <Modal onOpen={signUp} setOnOpen={openSignUp}>
            <Register />
          </Modal>
          <div className="container-log">
            <button className="button" onClick={openLogIn}>
              iniciar sesión
            </button>
            <button className="button secondary-button" onClick={openSignUp}>
              registrarse
            </button>
          </div>{" "}
        </>
      )}
    </>
  );
};
export { NavLogIn };
