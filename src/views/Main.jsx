import { useState, React, useEffect } from "react";
import ButtonCard from "../components/buttoms/ButtonCard";
import Modal from "../components/modal/Modal";
import { useNavigate } from "react-router";
import { Template } from "views/Template";
import { useSession } from "helpers/session/useSession";
import { Session } from "./Session";
import { Destination } from "components/destiny/Destination";
import { SearchPackage } from "components/SearchPackage/SearchPackage";
import { Login } from "components/Login";

export const Main = () => {
  const [onOpenLogin, setOnOpenLogin] = useState(false);
  const [onOpenRegister, setOnOpenRegister] = useState(false);
  const navigate = useNavigate();
  const { logout } = useSession();

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
