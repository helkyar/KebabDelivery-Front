import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "contexts/user";
import { useSession } from "helpers/session/useSession";

import register from "helpers/session/session";
import postUser from "helpers/users/postUser";

export const Register = () => {
  const navigate = useNavigate();
  const { loger, isLogged } = useSession();
  const { user, jwt } = useContext(Context);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [rol, setRol] = useState("client");

  const userRegister = async (e) => {
    e.preventDefault();
    const credentials = validCredentials();
    await register(credentials, "register");

    // May be an ineficient way to handle login
    await loger(credentials);
    setName("");
    setPassword("");
  };

  const adminRegister = async (e) => {
    e.preventDefault();
    const credentials = validCredentials();
    await postUser(credentials, jwt);
  };

  const handleRolChange = (e) => {
    setRol(e.target.value);
  };

  const validCredentials = () => {
    //(!) Validation logic: should be separated form the view
    if (!name.trim() || !password.trim()) {
      console.log("Introduce valid credentials");
      return;
    }

    //(!) Variable return depending of the rol (deliverers have more params)
    return { phone, name, surname, email, password, rol };
  };

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  return (
    <>
      <p className="modal-register-title">Registrate</p>
      <form
        className="register-form session-form"
        onSubmit={user?.rol === "admin" ? adminRegister : userRegister}
      >
        <input
          className="register-data"
          placeholder="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="register-data"
          placeholder="Contraseña"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        {user?.rol === "admin" && (
          <select onChange={handleRolChange}>
            <option value="admin">Administrador</option>
            <option value="deliverer">Repartidor</option>
            <option value="client">Cliente</option>
          </select>
        )}
        <button className="button register-button">Registrarme</button>
      </form>
    </>
  );
};
