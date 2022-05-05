import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import register from "helpers/session/session";
import { useSession } from "helpers/session/useSession";

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [rol, setRol] = useState("client");
  const { loger, isLogged } = useSession();

  const userRegister = async (e) => {
    e.preventDefault();
    //(!) Validation logic: should be separated form the view
    if (!name.trim() || !password.trim()) {
      console.log("Introduce valid credentials");
      return;
    }

    const credentials = { phone, name, surname, email, password, rol };
    //------------------------------------------------------
    await register(credentials, "register");

    // May be an ineficient way to handle login
    await loger(credentials);
    setName("");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="register-data"
          placeholder="Apellido"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <input
          className="register-data"
          placeholder="Telefono"
          type="tel"
          required
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="register-data"
          placeholder="Contraseña"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button register-button">Registrarme</button>
      </form>
    </>
  );
};
