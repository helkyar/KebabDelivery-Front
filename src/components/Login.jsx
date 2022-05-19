import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSession } from "helpers/session/useSession";

export const Login = ({ setOnOpen }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const { user, loger, isLogged, logfail } = useSession();

  const emailLogin = async (e) => {
    e.preventDefault();

    //(!) Validation logic: should be separated form the view
    if (!email.trim() || !pswd.trim()) {
      return;
    }
    const credentials = { email: email.trim(), password: pswd.trim().toString() };
    //--------------------------------------------------------

    await loger(credentials);
    setEmail("");
    setPswd("");
  };

  useEffect(() => {
    if (isLogged) {
      console.log(user);
      user?.rol === "deliverer" ? navigate("/deliverer") : navigate("/");
      // setOnOpen(false);
    }
    if (logfail) alert("Retry");
  }, [logfail, isLogged, navigate]);

  return (
    <>
      <p className="modal-login-title">Inicia Sesion</p>
      <form className="login-form session-form" onSubmit={emailLogin}>
        <input
          className="login-emailname"
          placeholder="correo"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-password"
          placeholder="password"
          type="password"
          required
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
        />
        <button className="login-button button">Iniciar Sesion</button>
      </form>
    </>
  );
};
