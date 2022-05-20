import getCoordinates from "helpers/orders/getCoordinates";
import { useSession } from "helpers/session/useSession";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { Stepper } from "components/stepper/Stepper";

export const MapView = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { jwt } = useSession();
  const [position, setPosition] = useState({ longitude: "", latitude: "" });

  useEffect(() => {
    async function coordinates() {
      const position = await getCoordinates(params.id, jwt);
      setPosition(position);
    }
    if (params.id) coordinates();
  }, [params]);
  console.log(position?.latitude);
  return (
    <div className="map-view">
      <Stepper
        titles={["asignado", "recogido", "en camino", "entregado"]}
        step={1}
      />
      <iframe
        className="map"
        src={`https://maps.google.com/maps?q=${position?.latitude},${position?.longitude},spain&output=embed`}
        frameBorder="0"
      ></iframe>
      <button className="button " onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};
