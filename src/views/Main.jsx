import { useState, React, useEffect } from "react";
import ButtonCard from "../components/buttoms/ButtonCard";
import { Destination } from "components/destiny/Destination";
import { SearchPackage } from "components/SearchPackage/SearchPackage";

export const Main = () => {
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
    </div>
  );
};
