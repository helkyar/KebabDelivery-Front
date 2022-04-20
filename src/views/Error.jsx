import React from "react";
import { useNavigate } from "react-router";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};
