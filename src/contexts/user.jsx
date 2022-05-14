import React, { useState, useEffect } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"));
  const [user, setUser] = useState(() => window.sessionStorage.getItem("user"));  
  useEffect(() => {
    if (typeof user === "string") {     
      let data = user.split(",");
      let userObj = {id: data[0], email: data[1], rol: data[2]}
      setUser(userObj);
    }
  }, [user]);

  return (
    <Context.Provider value={{ jwt, setJWT, user, setUser }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
