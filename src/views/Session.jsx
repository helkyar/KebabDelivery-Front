import React, { useState } from "react";
import { Login } from "components/Login";
import { Register } from "components/Register";
import { useNavigate } from "react-router";

export const Session = () => {
  const navigate = useNavigate();
  const [logView, setLogView] = useState(true);
  return (
    <>
      {logView && <Login />}
      {!logView && <Register />}
      <button
        className="session-btn"
        onClick={() => setLogView((state) => !state)}
      >
        {logView ? "Go Register" : "Go Login"}
      </button>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};
