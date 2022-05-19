import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../assets/scss/deliverycontentdate.scss";

import {
  getStorageCart,
  postStorageCart,
} from "helpers/localStorage/storageCart";
import { useState } from "react";

export const DeliveryContentDate = ({ props }) => {
  const [basket, setBasket] = useState(getStorageCart());

  const tempCart = { ...basket };

  useEffect(() => {
    postStorageCart(basket);
  }, [basket]);

  const handleDate = (e) => {
    if (e.target.id === "date") {
      console.log(e.target.value);
      tempCart.pick_up_date = e.target.value;
      setBasket(tempCart);
    } else if (e.target.id === "time") {
      tempCart.pick_up_time = e.target.value;
      setBasket(tempCart);
    } else if (e.target.id === "comment") {
      tempCart.comment = e.target.value;
      setBasket(tempCart);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.next(e);
  };

  return (
    <>
      <form className="column-center" onSubmit={handleSubmit}>
        <h4 className="resumen-titles">fecha</h4>
        <input
          id="date"
          onChange={handleDate}
          defaultValue={basket.date}
          type="date"
          placeholder="Fecha"
          className="input-primary"
          required
        ></input>
        <input
          id="time"
          onChange={handleDate}
          defaultValue={basket.time}
          type="time"
          min="08:00"
          max="21:00"
          required
          placeholder="Hora"
          className="input-primary"
        ></input>
        <h4 className="resumen-titles">Instrucciones al repartidor</h4>
        <textarea
          onChange={handleDate}
          id="comment"
          type="textarea"
          defaultValue={basket.comment}
          placeholder="Ejemplos: entregar en el buzón, código del intercomunicador, etc."
          rows="4"
          className="input-third"
        ></textarea>
        <button className="button button-destination">siguiente</button>
      </form>
    </>
  );
};
