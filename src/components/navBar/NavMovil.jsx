import { useState } from "react";
import { Nav } from "./Nav";
import { NavLogIn } from "./NavLogIn";

const NavBarMovil = () => {
  const [navBar, setNavBar] = useState(false);

  return (
    <>
      <div className="container-navbar"></div>
      {navBar ? (
        <div className="background-navbar" onClick={() => setNavBar(!navBar)}>
          <div onClick={(e) => e.stopPropagation()} className="navbar-movil">
            <NavLogIn />
            <Nav></Nav>
          </div>
        </div>
      ) : null}
      <button
        className="button button-menu secondary-button"
        onClick={() => setNavBar(!navBar)}
      ></button>
    </>
  );
};

export { NavBarMovil };
