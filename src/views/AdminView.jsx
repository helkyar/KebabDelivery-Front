import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RolContext from "contexts/rolAuth";
import getAllDeliverers from "helpers/deliverer/getAllDeliverers";
import { useSession } from "helpers/session/useSession";

export const AdminView = () => {
  const navigate = useNavigate();
  const [deliverers, setDeliverers] = useState([]);
  const { setAuthRol } = useContext(RolContext);
  const { user, isLogged, jwt } = useSession();

  useEffect(() => {
    if (!isLogged) navigate("/");
    setAuthRol("deliverer");
  }, [user, isLogged]);

  useEffect(() => {
    async function fetchDeliverers() {
      const data = await getAllDeliverers(jwt);
      console.log("DATA", data);
      setDeliverers(data);
    }
    fetchDeliverers();
  }, [user, isLogged]);

  return (
    <div>
      <h1 className="cart-title">Repartidores</h1>
      {deliverers?.map((deliverer, i) => {
        return (
          <div key={`deliver-${i}`} className="deliverer-admin-view">
            <p>Phone: {deliverer?.phone}</p>
            <p>Email: {deliverer?.email}</p>
            <button
              className="button"
              onClick={() =>
                navigate(
                  `/mapsadmin/${
                    deliverer?.latitude ? deliverer.latitude : ""
                  },${deliverer?.longitude ? deliverer.longitude : ""}`
                )
              }
            >
              Seguir
            </button>
          </div>
        );
      })}
    </div>
  );
};
