import { useEffect, useState } from "react";
import changeIcon from "assets/img/changeIcon.svg";
import {
  getStorageCart,
  postStorageCart,
} from "helpers/localStorage/storageCart";
import { useNavigate } from "react-router-dom";

export const Destination = () => {
  const [basket, setBasket] = useState(getStorageCart());
  const [rotate, setRotate] = useState(true);
  const tempCart = { ...basket };
  const navigate = useNavigate();
  useEffect(() => {
    setBasket(getStorageCart());
  }, []);

  const handleChange = (e) => {
    if (e.target.id === "from") {
      tempCart.from = e.target.value;
      setBasket(tempCart);
    } else if (e.target.id === "to") {
      tempCart.to = e.target.value;

      setBasket(tempCart);
    }
  };

  const rotateDestination = (e) => {
    rotate === "true"
      ? setBasket({ from: basket.from, to: basket.to })
      : setBasket({ from: basket.to, to: basket.from });

    setRotate(!rotate);
    postStorageCart(basket);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    postStorageCart(basket);
    navigate("/stepshop");
  };

  return (
    <>
      <form className="destination" onSubmit={handlerSubmit}>
        <div className="destination-inputs">
          <div className=" destination-input">
            <input
              id="from"
              type="text"
              value={basket.from}
              placeholder="from"
              className="input"
              onChange={handleChange}
              required
            />
            <input
              id="to"
              type="text"
              placeholder="to"
              value={basket.to}
              className="input"
              onChange={handleChange}
              required
            />
          </div>

          <button className="button-change-icon ">
            <img
              onClick={rotateDestination}
              className={
                rotate ? "change-icon button-left" : "change-icon button-rigth "
              }
              srcSet={changeIcon}
              alt=""
            />
          </button>
        </div>
        <button className="button button-destination">siguiente</button>
      </form>
    </>
  );
};
