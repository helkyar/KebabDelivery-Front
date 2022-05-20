import ButtonCard from "components/buttoms/ButtonCard";
import { React, useState, useEffect } from "react";
import getOrders from "helpers/client/getOrders";
import { useSession } from "helpers/session/useSession";
import { OrderData } from "components/OrderData";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user, jwt, isLogged } = useSession();
  const [orders, setOrders] = useState();
  const [modalOpen, setModalOpen] = useState(true);
  const [actualization, setActualization] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.id) {
      const orders = async () => {
        const data = await getOrders(user.id, jwt);
        console.log(data);
        const cart = data?.filter((element) => element.state > "0");
        setOrders(cart);
      };
      orders();
    }
  }, [user]);
  const hadleSubmit = async (order) => {
    navigate(`/maps/${order.id}`);
  };
  return (
    <>
      <div className="profile-view">
        <OrderData />
        <ButtonCard size={"big"} titleButton={"Mis pedidos"}>
          <div className="container-orders-profile">
            {orders?.map((order, key) => {
              return (
                <div key={key} className="resumen-form ">
                  <div className="resumen-section orders-profile">
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
                      <h4 className="resumen-titles">hora</h4>
                      <p>{order.pick_up_time}</p>
                    </div>

                    <button
                      onClick={() => hadleSubmit(order)}
                      className="button button-oreders-profile"
                    >
                      seguir
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </ButtonCard>
      </div>
    </>
  );
};
