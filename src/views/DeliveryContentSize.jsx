import { useNavigate } from "react-router-dom";
import ButtonCard from "components/buttoms/ButtonCard";
import { useEffect } from "react";
import '../assets/scss/deliverycontentdate.scss'

import {
  getStorageCart,
  postStorageCart,
} from "helpers/localStorage/storageCart";
import { useState } from "react";


export const DeliveryContentSize = ({ props }) => {
  const navigate = useNavigate();
  const [basket, setBasket] = useState(getStorageCart());

  const tempCart = {...basket} ;

  useEffect(() => {
    postStorageCart(basket);
  }, [basket]);


  const handleSize = (e) =>{
    tempCart.size = e.target.value
    console.log(e.target.value)
    setBasket(tempCart)

  }

  console.log(props);
  return (
    <>
      {" "}
      {/* <form onSubmit={handlerSubmit}> */}
      <ButtonCard size="small" titleButton="Paquete">
        <div>
          <div className="delivery-box-section">
            <div className="delivery-box">
   
              <input onClick={handleSize} id="small" type='radio' name='type' value='Paquete pequeño' />
              <label className="inputpaq" htmlFor='small' >Pequeño</label>
            </div>
            <div  className="delivery-box">
        
            <input onClick={handleSize}  id="medium" type='radio' name='type' value='Paquete mediano' />
              <label className="inputpaq" htmlFor='medium'>Mediano</label>
            </div>
            <div  className="delivery-box">
           
            <input onClick={handleSize}  id="big" type='radio' name='type' value='Paquete grande' />
              <label className="inputpaq" htmlFor='big'>Grande</label>
            </div>
          </div>
        </div>
      </ButtonCard>
      <ButtonCard size="small" titleButton="Sobre">
      <div>
          <div className="delivery-box-section">
            <div className="delivery-box">
   
              <input  onClick={handleSize}  id="sob-small" type='radio' name='type' value='Sobre pequeño' />
              <label className="inputsobre" htmlFor='sob-small' >Pequeño</label>
            </div>
            <div  className="delivery-box">
        
            <input  onClick={handleSize}  id="sob-medium" type='radio' name='type' value='Sobre mediano' />
              <label  className="inputsobre" htmlFor='sob-medium'>Mediano</label>
            </div>
            <div  className="delivery-box">
           
            <input  onClick={handleSize}  id="sob-big" type='radio' name='type' value='Sobre grande' />
              <label className="inputsobre" htmlFor='sob-big'>Grande</label>
            </div>
          </div>
        </div>
      </ButtonCard>
      <div className="destination-section">
      <button onClick={props.next} className="button button-destination">
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
      </div>
      {/* </form> */}
    </>
  );
};
