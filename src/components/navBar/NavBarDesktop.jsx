import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav";
import { NavLogIn } from "./NavLogIn";

const NavDesktop = () => {
  const [log, setLog] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="container-navbar">
        <div className="container-nav-desktop">
          <div className="nav-desktop">
            <h1 className="logo" onClick={() => navigate("/")}>
              Kometa
            </h1>
            <Nav />
          </div>
          <div className="container-button-log">
            <button
              className="button button-log secondary-button"
              onClick={() => setLog(!log)}
            ></button>
            {log ? (
              <>
                <NavLogIn></NavLogIn>
                <div onClick={() => setLog(!log)} className="log"></div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export { NavDesktop };
