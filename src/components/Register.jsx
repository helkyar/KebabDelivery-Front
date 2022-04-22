import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import register from "helpers/session/session";
import { useSession } from "helpers/session/useSession";

export const Register = () => {
  const navigate = useNavigate();
  const [nombre, setName] = useState("");
  const [username, setUsername] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const { loger, isLogged } = useSession();

  const userRegister = async (e) => {
    e.preventDefault();
    //(!) Validation logic: should be separated form the view
    if (!nombre.trim() || !password.trim()) {
      console.log("Introduce valid credentials");
      return;
    }
    const credentials = { nombre,  username, correo, password, };
    //------------------------------------------------------
    await register(credentials, "register");

    // Maybe an ineficient way to handle login
    await loger(credentials);
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  return (
    <>
      <form className="register-form session-form" onSubmit={userRegister}>
        <input
          className="register-nombre"
          placeholder="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="register-username"
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        
        />
        <input
          className="register-correo"
          placeholder="correo"
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          className="register-password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => userRegister(e)}>register</button>
      </form>
    </>
  );
};
