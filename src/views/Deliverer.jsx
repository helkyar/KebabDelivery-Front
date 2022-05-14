import { OrderOptions } from "components/deliverer/OrderOptions";
import RolContext from "contexts/rolAuth";
import UserContext from "contexts/user";
import fetchCoordinates from "helpers/deliverer/fetchCoordinates";
import getDelivererState from "helpers/deliverer/getDelivererState";
import getOrdersForDeliver from "helpers/deliverer/getOrdersForDeliver";
import patchActivateDeliverer from "helpers/deliverer/patchActivateDeliverer";
import patchDelivererCoordinates from "helpers/deliverer/patchDelivererCoordinates";
import { useSession } from "helpers/session/useSession";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Deliverer = () => {
  //Docs : https://developers.google.com/maps/documentation/geolocation/overview?_gl=1*m0lnpa*_ga*MTcwNjUzNTg1MS4xNjQ1NjIxMjIx*_ga_NRWSTWS78N*MTY1MjQyOTc3MS4xLjEuMTY1MjQyOTc4Ny4w
  const navigate = useNavigate();
  const { user, jwt, isLogged } = useSession();
  const { setAuthRol } = useContext(RolContext);
  const [active, setActive] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!isLogged) navigate("/");
    setAuthRol("deliverer");
  }, [user]);

  useEffect(() => {
    const getData = async () => {
      if (user.id) {
        // const { location } = await fetchCoordinates(jwt);
        // const params = { latitude: location.lat, longitude: location.lng };
        // await patchDelivererCoordinates(params, user.id, jwt);

        const state = await getDelivererState(user.id, jwt);
        if (state) setActive(state.active);

        const data = await getOrdersForDeliver(user.id, jwt);
        console.log(data, user.id, "DATA");
        if (data) setOrders(data);
      }
    };
    getData();
  }, [user]);

  const handleActivate = async () => {
    setActive((state) => !state);
  };

  useEffect(() => {
    async function updateDeliverer() {
      await patchActivateDeliverer({ active }, user.id, jwt);
    }
    if (user.id) updateDeliverer();
  }, [active]);

  return (
    <div>
      <button className="button" onClick={handleActivate}>
        {active ? "Salir" : "Activar"}
      </button>
      {active && (
        <section>
          {orders.map((order, i) => (
            <OrderOptions order={order} key={`order-${i}`} />
          ))}
        </section>
      )}
    </div>
  );
};
