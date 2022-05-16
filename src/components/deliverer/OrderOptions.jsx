import React, { useEffect, useRef, useState } from "react";
import Modal from "components/modal/Modal";
import CanvasDraw from "react-canvas-draw";
import { useSession } from "helpers/session/useSession";
import patchOrder from "helpers/orders/patchOrder";

export const OrderOptions = ({ delivery }) => {
  const canvas = useRef(null);
  const { jwt, user } = useSession();
  const [accept, setAccept] = useState(Boolean(delivery.id_repartidor));
  const [order, setOrder] = useState(delivery);
  const [openSign, setOpenSign] = useState(false);
  const [img, setImg] = useState(delivery.sign);

  useEffect(() => {
    if (!user.id) return;

    if (accept) {
      setOrder((prevState) => {
        let data = Object.assign({}, prevState);
        data.id_repartidor = user.id;
        data.estado = data.estado > 2 ? data.estado : 2;
        return data;
      });
    } else {
      setOrder((prevState) => {
        let data = Object.assign({}, prevState);
        data.id_repartidor = null;
        data.estado = 1;
        return data;
      });
    }
  }, [accept]);

  useEffect(() => {
    if (!user.id) return;
    async function updateOrder() {
      await patchOrder(order, order.id, jwt);
    }

    updateOrder();
  }, [order]);

  const handleAccept = () => {
    setAccept((state) => !state);
    // Axios pedido
  };

  const handlePickUp = () => {
    setOrder((prevState) => {
      let data = Object.assign({}, prevState);
      data.estado = 3;
      return data;
    });
  };

  const handleSign = async () => {
    const image = canvas.current.getDataURL();
    // const image = canvas.current.getSaveData();
    setImg(image);
    setOpenSign(false);
    setOrder((prevState) => {
      let data = Object.assign({}, prevState);
      data.estado = 4;
      data.sign = image;
      return data;
    });
    // Save img
  };
  console.log(img);

  return (
    <>
      <article>
        <h6>Paquete 1</h6>
        <button className="button" onClick={handleAccept}>
          {accept ? "Rechazar" : "Aceptar"} pedido
        </button>
        {accept && (
          <>
            <button onClick={handlePickUp} className="button">
              Mercar recogido
            </button>
            <button className="button" onClick={() => setOpenSign(true)}>
              Firmar entrega
            </button>
            <button className="button">Ver pedido</button>
          </>
        )}
        <img src={img} alt="" />
        <form
          encType="multipart/form-data"
          action="http://localhost:3003/deliverer/img"
          method="POST"
        >
          <input type="file" name="file" />
          <input type="submit" />
        </form>
      </article>
      <Modal onOpen={openSign} setOnOpen={setOpenSign}>
        <CanvasDraw ref={canvas} />
        <button onClick={handleSign} className="sign button">
          Aceptar
        </button>
        <button
          onClick={() => canvas.current.clear()}
          // onClick={() => canvas.current.loadSaveData(img)}
          className="sign button secondary-button"
        >
          Reset
        </button>
      </Modal>
    </>
  );
};
