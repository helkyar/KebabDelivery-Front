import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav">
        <p className="nav-item" onClick={() => navigate("/")}>
          inicio
        </p>
        <p className="nav-item" onClick={() => navigate("/shoppingCart")}>
          cart
        </p>
        <p>entregas</p>
      </nav>
    </>
  );
};
export { Nav };
