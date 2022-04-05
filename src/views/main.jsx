import { useSession } from "helpers/session/useSession";
import React from "react";
import { useNavigate } from "react-router";

export const Main = () => {
  const navigate = useNavigate();
  const { logout } = useSession();
  return (
    <div className="app">
      <h1>Make History</h1>
      <button onClick={() => navigate("/template")}>templates</button>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};
