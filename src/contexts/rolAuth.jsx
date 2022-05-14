import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "contexts/user";

const Context = React.createContext({});

export function RolAuthContextProvider({ children }) {
  const [authRol, setAuthRol] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.rol) {
      if (authRol !== user?.rol.trim() && user?.rol.trim() !== "admin") {
        navigate("/");
      }
    }
  }, [authRol]);

  return <Context.Provider value={{ setAuthRol }}>{children}</Context.Provider>;
}

export default Context;
