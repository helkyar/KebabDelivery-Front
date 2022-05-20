import { Destination } from "components/destiny/Destination";
import { useState, useContext, useEffect } from "react";
import {
  getStorageCart,
  postStorageCart,
} from "helpers/localStorage/storageCart";
import { useNavigate } from "react-router-dom";
import postOrder from "helpers/orders/postOrder";
import Context from "../contexts/user";
import Modal from "components/modal/Modal";
import { NavLogIn } from "components/navBar/NavLogIn";
import { Login } from "components/Login";
import { Register } from "components/Register";
import { ModalSession } from "components/modalSession/ModalSession";

export const DeliveryContentResume = ({ props }) => {
  const [basket, setBasket] = useState(getStorageCart());
  const [modalOpen, setModalOpen] = useState(false);
  const { user, jwt } = useContext(Context);
  const navigate = useNavigate();

  let tempOrder = { ...basket };
  const hadleSubmit = (e) => {
    e.preventDefault();
    if (user?.id) {
      tempOrder.id_client = user.id;

      postOrder(tempOrder, jwt);
      postStorageCart(null);
      navigate("/shoppingCart");
    } else {
      setModalOpen(true);
    }

    return;
  };

  const handleEdit = (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <>
      <Modal onOpen={modalOpen} setOnOpen={setModalOpen}>
        <ModalSession></ModalSession>
      </Modal>
      <form className="resumen-form" onSubmit={hadleSubmit}>
        <div className="resumen-section">
          <div>
            <h4 className="resumen-titles">paquete</h4>
            {/[a-zA-Z0-9]/.test(basket.package) ? (
              <p>1 {basket.pakage}</p>
            ) : null}
            {/[a-zA-Z0-9]/.test(basket.letter) ? (
              <p>1 {basket.letter}</p>
            ) : null}
          </div>
          <div>
            <h4 className="resumen-titles">DESDE</h4>
            <p>{basket.from}</p>
          </div>
          <div>
            <h4 className="resumen-titles">hasta</h4>
            <p>{basket.to}</p>
          </div>
          <div>
            <h4 className="resumen-titles">fecha</h4>
            <p>{basket.pick_up_date}</p>
          </div>
          <div>
            <h4 className="resumen-titles">hora</h4>
            <p>{basket.pick_up_time}</p>
          </div>
          <div>
            <h4 className="resumen-titles">instrucciones</h4>
            <p>{basket.comment}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleEdit}
          className="button secondary-button"
        >
          edit
        </button>
        <button className="button ">añadir al carrito</button>
      </form>
    </>
  );
};
