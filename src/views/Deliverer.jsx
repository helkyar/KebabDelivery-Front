import { OrderOptions } from "components/deliverer/OrderOptions";
import RolContext from "contexts/rolAuth";
import UserContext from "contexts/user";
import fetchCoordinates from "helpers/maps/fetchCoordinates";
import React, { useContext, useEffect, useRef, useState } from "react";

export const Deliverer = () => {
  //Docs : https://developers.google.com/maps/documentation/geolocation/overview?_gl=1*m0lnpa*_ga*MTcwNjUzNTg1MS4xNjQ1NjIxMjIx*_ga_NRWSTWS78N*MTY1MjQyOTc3MS4xLjEuMTY1MjQyOTc4Ny4w
  const { user } = useContext(UserContext);
  const { setAuthRol } = useContext(RolContext);
  const [coordinates, setCoordinates] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    setAuthRol("deliverer");
  }, [user]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCoordinates();
      setCoordinates(data);
    };
    getData();
  }, []);

  const handleActivate = () => {
    setActive((state) => !state);
    // Axios pedido, todos los asignados a ese día y que no estén activados por otros repartidores
  };

  return (
    <div>
      Coordinates: {coordinates?.location?.lat} || {coordinates?.location?.lng}
      <button className="button" onClick={handleActivate}>
        {active ? "Salir" : "Activar"}
      </button>
      {active && (
        <section>
          <OrderOptions />
        </section>
      )}
    </div>
  );
};
