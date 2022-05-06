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
      <h1>model de resumen</h1>
      <div>
        <h4>direccion</h4>
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
      <div>
        <h4>fecha</h4>
        <input type="date" className="input-primary input-resumen" />
        <input type="time" className="input-primary input-resumen" />
      </div>
      <div>
        <h4>fecha</h4>
        <textarea className="input-primary textarea-resumen" />
      </div>
      <button onClick={props.back} className="button button-destination">
        Atrás
      </button>
    </>
  );
};
