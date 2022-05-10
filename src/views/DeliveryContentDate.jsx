import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import '../assets/scss/deliverycontentdate.scss'

import {
  getStorageCart,
  postStorageCart,
} from "helpers/localStorage/storageCart";
import { useState } from "react";

export const DeliveryContentDate = ({ props }) => {

  const [basket, setBasket] = useState(getStorageCart());
  

  const tempCart = {...basket} ;

  useEffect(() => {
    postStorageCart(basket);
  }, [basket]);


  const handleDate = (e) =>{
    if(e.target.id === 'date') {
      console.log(e.target.value)
      tempCart.date = e.target.value;
      setBasket(tempCart)
    } else if(e.target.id === 'time') {
      tempCart.time = e.target.value;
      setBasket(tempCart)
    }  else if(e.target.id === 'comment') {
      tempCart.comment = e.target.value;
      setBasket(tempCart)
    } 
  }

  return (
    <>
      <div className="column-center">
      <h4 className="resumen-titles">fecha</h4>
         <input id='date' onChange={handleDate} type='date' placeholder="Fecha" className="input-primary"></input>
         <input  id='time' onChange={handleDate} type='time' placeholder="Hora" className="input-primary"></input>
         <h4 className="resumen-titles">Instrucciones al repartidor</h4>
         <textarea onChange={handleDate} id='comment' type='textarea' placeholder="Ejemplos: entregar en el buzón, código del intercomunicador, etc." rows='4' className="input-third"></textarea>

      </div>
    
      
      <button onClick={props.next} className="button button-destination">siguiente</button>
      <button onClick={props.back} className="button button-destination">Atrás</button>
    </>
  );
};
