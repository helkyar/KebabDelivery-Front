import { Login } from "components/Login";
import Modal from "components/modal/Modal";
import { Register } from "components/Register";
import { useState, useEffect, useContext } from "react";
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
  const { user, isLogged } = useSession();
  const navigate = useNavigate();
  const { logout } = useSession();

  return (
    <>
      {isLogged ? (
        <div className="container-log">
          <button className="nav-option" onClick={logout}>
            Log out
          </button>
          <button className="nav-option" onClick={() => navigate("/profile")}>
            Profile
          </button>
          {user?.rol?.trim() === "admin" && (
            <button className="nav-option" onClick={() => openSignUp(!signUp)}>
              Crear Usuario
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="container-log">
            <button className="button" onClick={openLogIn}>
              iniciar sesión
            </button>
            <button className="button secondary-button" onClick={openSignUp}>
              registrarse
            </button>
          </div>
        </>
      )}
      <Modal onOpen={signUp} setOnOpen={openSignUp}>
        <Register />
      </Modal>
      <Modal onOpen={logIn} setOnOpen={openLogIn}>
        <Login />
      </Modal>
    </>
  );
};
export { NavLogIn };
