import { Destination } from "components/destiny/Destination";
import { useState } from "react";
import {
  getStorageCart,
  postStorageCart,
} from "helpers/localStorage/storageCart";
export const DeliveryContentResume = ({ props }) => {
  const [basket, setBasket] = useState(getStorageCart());
  const [edit, setEdit] = useState(true);
  console.log(getStorageCart());

  const hadleSubmit = (e) => {
    e.preventDefault();
    return console.log("funcion");
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
    return console.log("funcion edit");
  };
  return (
    <>
      <form className="resumen-form" onSubmit={hadleSubmit}>
        <div className="resumen-section">
          <h4 className="resumen-titles">direccion</h4>
          <input
            type="text"
            defaultValue={basket.from}
            className="input-primary input-resumen"
            disabled={edit}
          />

          <input
            type="text"
            defaultValue={basket.to}
            className="input-primary input-resumen"
            disabled={edit}
          />
        </div>
        <div className="resumen-section">
          <h4 className="resumen-titles">fecha</h4>
          <input
            type="date"
            defaultValue={basket.date}
            className="input-primary input-resumen"
            disabled={edit}
          />
          <input
            type="time"
            defaultValue={basket.time}
            className="input-primary input-resumen"
            disabled={edit}
          />
        </div>
        <div>
          <h4 className="resumen-titles">instrucciones</h4>
          <textarea
            defaultValue={basket.comment}
            className="input-primary textarea-resumen"
            disabled={edit}
          />
        </div>
        <button onClick={handleEdit} className="button secondary-button">
          edit
        </button>
        <button className="button " disabled={edit}>
          añadir al carrito
        </button>
      </form>
    </>
  );
};
