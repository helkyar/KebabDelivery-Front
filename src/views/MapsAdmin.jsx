import { useSession } from "helpers/session/useSession";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useTimer } from "helpers/deliverer/useTimer";
import React, { useContext, useEffect, useState } from "react";
import RolContext from "contexts/rolAuth";

export const MapsAdmin = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { setAuthRol } = useContext(RolContext);
  const { user, isLogged, jwt } = useSession();

  useEffect(() => {
    if (!isLogged) navigate("/");
    setAuthRol("deliverer");
  }, [user, isLogged]);
  return (
    <div className="map-view">
      <iframe
        className="map"
        src={`https://maps.google.com/maps?q=${params.id}&output=embed`}
        frameBorder="0"
      ></iframe>

      <button className="button " onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};
