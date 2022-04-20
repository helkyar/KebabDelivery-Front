import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import register from "helpers/session/session";
import { useSession } from "helpers/session/useSession";

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loger, isLogged } = useSession();

  const userRegister = async (e) => {
    e.preventDefault();
    //(!) Validation logic: should be separated form the view
    if (!username.trim() || !password.trim()) {
      console.log("Introduce valid credentials");
      return;
    }
    const credentials = { username, password };
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
          className="register-username"
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
