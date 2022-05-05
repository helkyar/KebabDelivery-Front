import { useCallback, useContext } from "react";
import Context from "contexts/user";
import startSession from "helpers/session/session";
import { useNavigate, useRoutes } from "react-router-dom";

export const useSession = () => {
  const navigate = useNavigate();
  const { jwt, setJWT, user, setUser } = useContext(Context);
  let logfail = false;
  const loger = useCallback(
    ({ email, password }) => {
      startSession({ email, password }, "login")
        .then(({ token, email, id }) => {
          window.sessionStorage.setItem("jwt", token);
          window.sessionStorage.setItem("user", `${id}, ${email}`);
          setJWT(token);
          setUser(`${id}, ${email}`);
          navigate("/");
        })
        .catch((err) => {
          logfail = true;
          window.sessionStorage.removeItem("jwt");
          window.sessionStorage.removeItem("user");
          setJWT(null);
          setUser(null);
          navigate("/");
          console.error(err);
        });
    },
    [setJWT],
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    window.sessionStorage.removeItem("user");
    setJWT(null);
    setUser(null);
    navigate("/");
  }, [setJWT]);

  return { user, logout, loger, isLogged: Boolean(jwt), logfail };
};
