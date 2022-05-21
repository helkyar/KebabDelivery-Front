import getCoordinates from "helpers/orders/getCoordinates";
import { useSession } from "helpers/session/useSession";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { Stepper } from "components/stepper/Stepper";
import { useTimer } from "helpers/deliverer/useTimer";

export const MapView = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { jwt } = useSession();
  const [ltd, setLtd] = useState("");
  const [lng, setLng] = useState("");
  const [state, setState] = useState(0);

  const { setIsActive, alarm } = useTimer(60000);

  useEffect(() => {
    async function coordinates() {
      if (alarm) setIsActive(true);
      const position = await getCoordinates(params.id, jwt);
      console.log("COORDINATES", position?.latitude, position?.longitude);
      setLtd(position?.latitude ? position.latitude : "");
      setLng(position?.longitude ? position.longitude : "");
      setState(position?.state ? parseInt(position.state) - 1 : 0);
    }
    if (params.id) coordinates();
  }, [params, alarm]);

  return (
    <div className="map-view">
      <Stepper
        titles={["creado", "asignado", "en camino", "entregado"]}
        step={state}
      />
      {state < 3 ? (
        <iframe
          className="map"
          src={`https://maps.google.com/maps?q=${ltd},${lng}&output=embed`}
          frameBorder="0"
        ></iframe>
      ) : (
        <h1 className="delivererd-order">Paquete Entregado</h1>
      )}
      <button className="button " onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};
