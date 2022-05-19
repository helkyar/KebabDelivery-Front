import { useState, React, useEffect, useContext } from "react";
import ButtonCard from "../components/buttoms/ButtonCard";
import { Destination } from "components/destiny/Destination";
import { SearchPackage } from "components/SearchPackage/SearchPackage";

import Context from "contexts/user";
import { useNavigate } from "react-router-dom";
import { CsvUpload } from "components/CsvUpload";

export const Main = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.rol) return;
    if (user.rol.trim() === "deliverer") navigate("deliverer");
  }, [user]);
  return (
    <div className="app">
      <header className="header">
        <div>
          <h1 className="logo">kometa</h1>
        </div>
      </header>
      <SearchPackage />

      <ButtonCard size="big" titleButton="hacer delivery">
        <Destination />
      </ButtonCard>
      <ButtonCard size="big" titleButton="subir csv">
        <CsvUpload />
      </ButtonCard>
    </div>
  );
};
