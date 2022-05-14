import React, { useRef, useState } from "react";
import Modal from "components/modal/Modal";
import CanvasDraw from "react-canvas-draw";

export const OrderOptions = () => {
  const canvas = useRef(null);
  const [accept, setAccept] = useState(false);
  const [openSign, setOpenSign] = useState(false);

  const handleAccept = () => {
    setAccept((state) => !state);
    // Axios pedido
  };
  const handleSign = async () => {
    console.log(canvas.current.getDataURL());
    setOpenSign(false);
    // Axios pedido
  };

  return (
    <>
      <article>
        <h6>Paquete 1</h6>
        <button className="button" onClick={handleAccept}>
          {accept ? "Rechazar" : "Aceptar"} pedido
        </button>
        {accept && (
          <>
            <button className="button">Mercar recogido</button>
            <button className="button" onClick={() => setOpenSign(true)}>
              Firmar entrega
            </button>
            <button className="button">Ver pedido</button>
          </>
        )}
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
  );
};
