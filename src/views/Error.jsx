import React from "react";
import { useNavigate } from "react-router";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-view">
      <h1>404</h1>
      <button className="button" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};
