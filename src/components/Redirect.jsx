import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "helpers/session/useSession";

export const Redirect = () => {
  const navigate = useNavigate();
  const { isLogged } = useSession();

  useEffect(() => {
    if (!isLogged) navigate("/login");
  }, [isLogged, navigate]);

  return <></>;
};
