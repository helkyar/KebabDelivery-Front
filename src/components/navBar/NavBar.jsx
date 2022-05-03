import { useState, useEffect } from "react";
import { NavDesktop } from "./NavBarDesktop";
import { NavBarMovil } from "./NavBarMovil";
import movil from "../../assets/scss/variables.scss";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  var regex = /(\d+)/g;
  const widthMovil = movil.movil.match(regex)[0];
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>{width <= parseInt(widthMovil) ? <NavBarMovil /> : <NavDesktop />}</>
  );
};

export { NavBar };
