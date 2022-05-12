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
  console.log(tempCart);

  useEffect(() => {
    postStorageCart(basket);
  }, [basket]);

  const handlerSubmit = (e) => {
    e.preventDefault();

    console.log("tamaño enviado");
    tempCart.package = "small";
    postStorageCart(tempCart);
    props.next();
  };

  console.log(props);
  return (
    <>
      {" "}
      <ButtonCard size="small" titleButton="Paquete">
        <div>
          <div className="delivery-box-section">
            <div className="delivery-box">
              <input id="small" type="radio" name="size" value="paq-small" />
              <label htmlFor="small">Pequeño</label>
            </div>
            <div className="delivery-box">
              <input id="medium" type="radio" name="size" value="paq-medium" />
              <label htmlFor="medium">Mediano</label>
            </div>
            <div className="delivery-box">
              <input id="big" type="radio" name="size" value="big" />
              <label htmlFor="big">Grande</label>
            </div>
          </div>
        </div>
      </ButtonCard>
      <ButtonCard size="small" titleButton="Sobre">
        <div>
          <div className="delivery-box-section">
            <div className="delivery-box">
              <input
                id="sob-small"
                type="radio"
                name="sob-size"
                value="sob-small"
              />
              <label htmlFor="sob-small">Pequeño</label>
            </div>
            <div className="delivery-box">
              <input
                id="sob-medium"
                type="radio"
                name="sob-size"
                value="sob-medium"
              />
              <label htmlFor="sob-medium">Mediano</label>
            </div>
            <div className="delivery-box">
              <input
                id="sob-big"
                type="radio"
                name="sob-size"
                value="sob-medium"
              />
              <label htmlFor="sob-big">Grande</label>
            </div>
          </div>
        </div>
      </ButtonCard>
      <button onClick={handlerSubmit} className="button button-destination">
        siguiente
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="button button-destination"
      >
        Atrás
      </button>
    </>
  );
};
