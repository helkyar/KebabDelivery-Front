import { useEffect, useState } from "react";
import changeIcon from "assets/img/changeIcon.svg";

export const Destination = () => {
  const [basket, setBasket] = useState({ from: "", to: "" });
  const [rotate, setRotate] = useState(true);

  const handleChange = (e) => {
    if (e.target.id === "from") {
      setBasket({ from: e.target.value, to: basket.to });
    } else if (e.target.id === "to") {
      setBasket({ from: basket.from, to: e.target.value });
    }
  };

  const changeSide = () => {
    rotate === "true"
      ? setBasket({ from: basket.from, to: basket.to })
      : setBasket({ from: basket.to, to: basket.from });
    setRotate(!rotate);
  };

  return (
    <>
      <div className="destination">
        <div className="destination-inputs">
          <div className=" destination-input">
            <input
              id="from"
              type="text"
              value={basket.from}
              placeholder="from"
              className="input"
              onChange={handleChange}
            />
            <input
              id="to"
              type="text"
              placeholder="to"
              value={basket.to}
              className="input"
              onChange={handleChange}
            />
          </div>

          <button className="button-change-icon " onClick={changeSide}>
            <img
              className={
                rotate ? "change-icon button-left" : "change-icon button-rigth "
              }
              srcSet={changeIcon}
              alt=""
            />
          </button>
        </div>
        <button className="button button-destination">siguiente</button>
      </div>
    </>
  );
};
