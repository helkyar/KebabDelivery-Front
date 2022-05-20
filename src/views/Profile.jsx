import ButtonCard from "components/buttoms/ButtonCard";
import { React } from "react";
import { OrderData } from "components/OrderData";

export const Profile = () => {
  return (
    <>
      <div className="profile-view">
        <OrderData />
        <ButtonCard size={"small"} titleButton={"Mis pedidos"}></ButtonCard>
      </div>
    </>
  );
};
