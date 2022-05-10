import { Destination } from "components/destiny/Destination";
import { useState } from "react";
import {
  getStorageCart,
  postStorageCart,
} from "helpers/localStorage/storageCart";
export const DeliveryContentResume = ({ props }) => {
  const [basket, setBasket] = useState(getStorageCart());
  console.log(props);
  return (
    <>
      <div className="resumen-section">
        <h4 className="resumen-titles">direccion</h4>
        <input
          type="text"
          value={basket.from}
          className="input-primary input-resumen"
        />
        <input
          type="text"
          value={basket.to}
          className="input-primary input-resumen"
        />
      </div>
      <div className="resumen-section">
        <h4 className="resumen-titles">Tipo de entrega</h4>
        <input
          type="text"
          value={basket.size}
          className="input-primary input-resumen"
        />
        
      </div>
      <div className="resumen-section">
        <h4 className="resumen-titles">fecha</h4>
        <input type="date" value={basket.date} className="input-primary input-resumen" />
        <input type="time" value={basket.time} className="input-primary input-resumen" />
      </div>
      <div>
        <h4 className="resumen-titles">instrucciones</h4>
        <textarea value={basket.comment} className="input-primary textarea-resumen" />
      </div>
      <button onClick={props.back} className="button button-destination">
        Atrás
      </button>
    </>
  );
};
