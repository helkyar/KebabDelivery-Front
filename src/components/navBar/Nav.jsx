import { useNavigate } from "react-router-dom";
import { NavLogIn } from "./NavLogIn";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav">
        <p onClick={() => navigate("/")}>inicio</p>
        <p>entregas</p>
      </nav>
    </>
  );
};
export { Nav };
