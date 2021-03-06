import { ModalSession } from "components/modalSession/ModalSession";
import Modal from "components/modal/Modal";
import Context from "contexts/user";
import getOrders from "helpers/client/getOrders";
import { useSession } from "helpers/session/useSession";
import patchOrder from "helpers/orders/patchOrder";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import delOrder from "helpers/orders/delOrder";

export const ShoppingCart = () => {
  const navigate = useNavigate();
  const { user, jwt, isLogged } = useSession();
  const [orders, setOrders] = useState();

  const [modalOpen, setModalOpen] = useState(true);
  const [actualization, setActualization] = useState(true);
  useEffect(() => {
    if (user?.id) {
      const orders = async () => {
        const data = await getOrders(user.id, jwt);
        const cart = data?.filter(
          (element) => element.state == "0" && element.id_client === user.id
        );
        setOrders(cart);
      };
      orders();
    }
  }, [user, actualization]);

  useEffect(() => {
    if (modalOpen) return;
    if (!isLogged) navigate("/");
  }, [modalOpen]);

  const hadleSubmit = async (order) => {
    order.state = 1;
    await patchOrder(order, order.id, jwt);
    setActualization(!actualization);
  };
  const hadleDelete = async (order) => {
    order.state = 1;
    await delOrder(order.id, jwt);
    setActualization(!actualization);
  };

  return (
    <>
      {isLogged ? (
        <>
          <h1 className="cart-title">
            {orders?.length > 0 ? "Tu carrito" : "Tu carrito esta vacio"}
          </h1>
          {orders?.map((order, key) => {
            return (
              <div key={key} className="resumen-form">
                <div className="resumen-section">
                  <div>
                    <h4 className="resumen-titles">paquete</h4>
                    {/[a-zA-Z0-9]/.test(order.pakage) ? (
                      <p>1 {order.pakage}</p>
                    ) : null}
                    {/[a-zA-Z0-9]/.test(order.letter) ? (
                      <p>1 {order.letter}</p>
                    ) : null}
                  </div>
                  <div>
                    <h4 className="resumen-titles">DESDE</h4>
                    <p>{order.from}</p>
                  </div>
                  <div>
                    <h4 className="resumen-titles">hasta</h4>
                    <p>{order.to}</p>
                  </div>
                  <div>
                    <h4 className="resumen-titles">fecha</h4>
                    <p>{order.pick_up_date}</p>
                  </div>
                  <div>
                    <h4 className="resumen-titles">instrucciones</h4>
                    <p>{order.comment}</p>
                  </div>
                  <button
                    onClick={() => hadleSubmit(order)}
                    className="button button-oreders-profile"
                  >
                    pagar
                  </button>
                  <button
                    onClick={() => hadleDelete(order)}
                    className="button delete button-oreders-profile"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <Modal onOpen={modalOpen} setOnOpen={setModalOpen}>
            <ModalSession></ModalSession>
          </Modal>
        </>
      )}
    </>
  );
};
