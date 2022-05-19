import { useNavigate } from "react-router-dom";
import ButtonCard from "components/buttoms/ButtonCard";
import { useEffect } from "react";
import "../assets/scss/deliverycontentdate.scss";

import {
  getStorageCart,
  postStorageCart,
} from "helpers/localStorage/storageCart";
import { useState } from "react";

export const DeliveryContentSize = ({ props }) => {
  const navigate = useNavigate();
  const [basket, setBasket] = useState(getStorageCart());

  const tempCart = { ...basket };

  useEffect(() => {
    postStorageCart(basket);
  }, [basket]);

  const handleLetter = (e) => {
    tempCart.letter = e.target.value;
    // console.log(e.target.value);
    setBasket(tempCart);
  };
  const handlePackage = (e) => {
    tempCart.pakage = e.target.value;
    // console.log(e.target.value);
    setBasket(tempCart);
  };

  // console.log(props);
  return (
    <>
      {" "}
      {/* <form onSubmit={handlerSubmit}> */}
      <ButtonCard size="small" titleButton="Paquete">
        <form className="delivery-box-section">
          <div className="delivery-box">
            <input
              onClick={handlePackage}
              id="small"
              type="radio"
              name="type"
              value="Paquete pequeño"
              defaultChecked={
                basket.pakage === "Paquete pequeño" ? true : false
              }
              required
            />
            <label className="inputpaq" htmlFor="small">
              Pequeño
            </label>
          </div>
          <div className="delivery-box">
            <input
              onClick={handlePackage}
              id="medium"
              type="radio"
              name="type"
              value="Paquete mediano"
              defaultChecked={
                basket.pakage === "Paquete mediano" ? true : false
              }
              required
            />
            <label className="inputpaq" htmlFor="medium">
              Mediano
            </label>
          </div>
          <div className="delivery-box">
            <input
              onClick={handlePackage}
              id="big"
              type="radio"
              name="type"
              value="Paquete grande"
              defaultChecked={basket.pakage === "Paquete grande" ? true : false}
              required
            />
            <label className="inputpaq" htmlFor="big">
              Grande
            </label>
          </div>
        </form>
      </ButtonCard>
      <ButtonCard size="small" titleButton="Sobre">
        <form className="delivery-box-section">
          <div className="delivery-box">
            <input
              onClick={handleLetter}
              id="sob-small"
              type="radio"
              name="type"
              value="Sobre pequeño"
              defaultChecked={basket.letter === "Sobre pequeño" ? true : false}
            />
            <label className="inputsobre" htmlFor="sob-small">
              Pequeño
            </label>
          </div>
          <div className="delivery-box">
            <input
              onClick={handleLetter}
              id="sob-medium"
              type="radio"
              name="type"
              value="Sobre mediano"
              defaultChecked={basket.letter === "Sobre mediano" ? true : false}
            />
            <label className="inputsobre" htmlFor="sob-medium">
              Mediano
            </label>
          </div>
          <div className="delivery-box">
            <input
              onClick={handleLetter}
              id="sob-big"
              type="radio"
              name="type"
              value="Sobre grande"
              defaultChecked={basket.letter === "Sobre grande" ? true : false}
            />
            <label className="inputsobre" htmlFor="sob-big">
              Grande
            </label>
          </div>
        </form>
      </ButtonCard>
      <div className="destination-section">
        <button
          onClick={props.next}
          disabled={
            basket.letter.length > 0 || basket.pakage.length > 0 ? false : true
          }
          className="button button-destination"
        >
          siguiente
        </button>
      </div>
      {/* </form> */}
    </>
  );
};
