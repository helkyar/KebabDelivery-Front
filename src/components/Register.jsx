import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import register from "helpers/session/session";
import { useSession } from "helpers/session/useSession";

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [rol, setRol] = useState("client");
  const { loger, isLogged } = useSession();

  const userRegister = async (e) => {
    e.preventDefault();
    //(!) Validation logic: should be separated form the view
    if (!username.trim() || !password.trim()) {
      console.log("Introduce valid credentials");
      return;
    }
   
    const credentials = { username, password, lastName, email, phone, rol };
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
      <p className="modal-register-title">Registrate</p>
      <form className="register-form session-form" onSubmit={userRegister}>
        <input
          className="register-data"
          placeholder="Correo electrónico"
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="register-data"
          placeholder="Nombre"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="register-data"
          placeholder="Apellido"
          type="text"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />

        <input
          className="register-data"
          placeholder="Telefono"
          type="tel" required
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="register-data"
          placeholder="Contraseña"
          type="password" required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="button register-button">
          Registrarme
        </button>
      </form>
    </>
  );
};
