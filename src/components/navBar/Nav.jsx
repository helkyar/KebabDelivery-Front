import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav">
        <p onClick={() => navigate("/")}>inicio</p>
        <p onClick={() => navigate("/shoppingCart")}>cart</p>
        <p>entregas</p>
      </nav>
    </>
  );
};
export { Nav };
