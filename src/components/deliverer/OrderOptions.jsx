import React, { useEffect, useRef, useState } from "react";
import Modal from "components/modal/Modal";
import CanvasDraw from "react-canvas-draw";
import { useSession } from "helpers/session/useSession";
import patchOrder from "helpers/orders/patchOrder";
import getSignature from "helpers/deliverer/getSignature";

export const OrderOptions = ({ delivery }) => {
  const canvas = useRef(null);
  const { jwt, user } = useSession();
  const [accept, setAccept] = useState(Boolean(delivery.id_delivered));
  const [order, setOrder] = useState(delivery);
  const [openSign, setOpenSign] = useState(false);

  console.log("ORDER", order);

  useEffect(() => {
    if (!user.id) return;

    if (accept) {
      setOrder((prevState) => {
        let data = Object.assign({}, prevState);
        data.id_delivered = user.id;
        data.state = data.state > 2 ? data.state : 2;
        return data;
      });
    } else {
      setOrder((prevState) => {
        let data = Object.assign({}, prevState);
        data.id_delivered = null;
        data.state = 1;
        return data;
      });
    }
  }, [accept]);

  useEffect(() => {
    if (!user.id) return;
    async function updateOrder() {
      await patchOrder(order, order.id, jwt);
      const image = await getSignature(order.id, jwt);
      // setImg(image);
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
      data.state = 3;
      return data;
    });
  };

  const handleSign = async () => {
    const image = canvas.current.getDataURL();
    setOpenSign(false);
    setOrder((prevState) => {
      let data = Object.assign({}, prevState);
      data.state = 4;
      data.sign = image;
      return data;
    });

    await patchOrder(order, order.id, jwt);
  };

  return (
    <>
      {order.state < 4 && (
        <>
          <article className="deliverer-order-view">
            {/* desplegable */}
            <div className="deliverer-order-data">
              <h6>CÓDIGO</h6>
              <p>{order.id}</p>
              <h6>TIPO</h6>
              <p>{order.pakage}</p>
              <h6>DESDE</h6>
              <p>{order.from}</p>
              <h6>HASTA</h6>
              <p>{order.to}</p>
              <h6>FECHA RECOGIDA</h6>
              <p>{order.pick_up_date}</p>
              <h6>INSTRUCCIONES</h6>
              <p>{order.comment}</p>
            </div>

            {accept && (
              <>
                {order.state == 2 && (
                  <button onClick={handlePickUp} className="button option-btn">
                    Marcar recogido
                  </button>
                )}
                {order.state == 3 && (
                  <button
                    className="button option-btn"
                    onClick={() => setOpenSign(true)}
                  >
                    Firmar entrega
                  </button>
                )}
              </>
            )}
            <button className="button active-btn" onClick={handleAccept}>
              {accept ? "-" : "+"}
            </button>
          </article>
          <Modal onOpen={openSign} setOnOpen={setOpenSign}>
            <CanvasDraw ref={canvas} />
            <button onClick={handleSign} className="sign button">
              Aceptar
            </button>
            <button
              onClick={() => canvas.current.clear()}
              className="sign button secondary-button"
            >
              Reset
            </button>
          </Modal>
        </>
      )}
    </>
  );
};
