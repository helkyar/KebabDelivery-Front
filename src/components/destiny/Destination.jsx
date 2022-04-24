import { useEffect, useState } from "react";
import changeIcon from "assets/img/changeIcon.svg";
import {
  getStorageCart,
  setStorageCart,
} from "helpers/localStorage/storageCart";

export const Destination = () => {
  const [basket, setBasket] = useState(getStorageCart());
  const [rotate, setRotate] = useState(true);

  const handleChange = (e) => {
    if (e.target.id === "from") {
      setBasket({ from: e.target.value, to: basket.to });
    } else if (e.target.id === "to") {
      setBasket({ from: basket.from, to: e.target.value });
    }
  };

  const changeSide = (e) => {
    e.preventDefault();
    rotate === "true"
      ? setBasket({ from: basket.from, to: basket.to })
      : setBasket({ from: basket.to, to: basket.from });
    setRotate(!rotate);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setStorageCart(basket);
    console.log(getStorageCart());
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
              onClick={changeSide}
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
