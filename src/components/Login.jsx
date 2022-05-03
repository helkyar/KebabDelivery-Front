import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSession } from "helpers/session/useSession";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");
  const { loger, isLogged, logfail } = useSession();

  const userLogin = async (e) => {
    e.preventDefault();

    //(!) Validation logic: should be separated form the view
    if (!user.trim() || !pswd.trim()) {
      console.log("Introduce valid credentials");
      return;
    }
    const credentials = { username: user.trim(), password: pswd.trim() };
    //--------------------------------------------------------

    await loger(credentials);
    setUser("");
    setPswd("");
  };

  useEffect(() => {
    if (isLogged) navigate("/");
    if (logfail) alert("Retry");
  }, [logfail, isLogged, navigate]);

  return (
    <>
      <p className="modal-login-title">Inicia Sesion</p>
      <form className="login-form session-form" onSubmit={userLogin}>
        <input
          className="login-username"
          placeholder="username"
          type="text"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
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
