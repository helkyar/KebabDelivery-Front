import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav">
        <p className="pointer" onClick={() => navigate("/")}>
          inicio
        </p>
        <p className="pointer" onClick={() => navigate("/shoppingCart")}>
          cart
        </p>
      </nav>
    </>
  );
};
export { Nav };
