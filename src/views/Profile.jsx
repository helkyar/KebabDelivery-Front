import ButtonCard from "components/buttoms/ButtonCard";
import { React, useState } from "react";

export  const Profile = () =>{
    const [data, setData] = useState("")
    


    return(
        <>
        <ButtonCard size={"small"} titleButton={"Mis pedidos"} />
        <ButtonCard size={"small"} titleButton={"Direcciones favoritas"} />
        </>
    );
}