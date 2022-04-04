import React, { useState, useEffect } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"));
  const [user, setUser] = useState(() => window.sessionStorage.getItem("user"));

  useEffect(() => {
    if (typeof user === "string") {
      let userArray = user.split(",");
      setUser(userArray);
    }
  }, [user]);

  return (
    <Context.Provider value={{ jwt, setJWT, user, setUser }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
