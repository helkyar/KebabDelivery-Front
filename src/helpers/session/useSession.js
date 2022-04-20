import { useCallback, useContext } from "react";
import Context from "contexts/user";
import startSession from "helpers/session/session";
import { useNavigate } from "react-router-dom";

export const useSession = () => {
  const navigate = useNavigate();
  const { jwt, setJWT, user, setUser } = useContext(Context);
  let logfail = false;
  const loger = useCallback(
    ({ username, password }) => {
      startSession({ username, password }, "login")
        .then(({ token, username, id }) => {
          window.sessionStorage.setItem("jwt", token);
          window.sessionStorage.setItem("user", `${id}, ${username}`);
          setJWT(token);
          setUser(`${id}, ${username}`);
        })
        .catch((err) => {
          logfail = true;
          window.sessionStorage.removeItem("jwt");
          window.sessionStorage.removeItem("user");
          console.error(err);
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    window.sessionStorage.removeItem("user");
    setJWT(null);
    setUser(null);
    navigate("/login");
  }, [setJWT]);

  return { user, logout, loger, isLogged: Boolean(jwt), logfail };
};
