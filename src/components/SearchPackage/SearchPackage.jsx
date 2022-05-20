import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchPackage = () => {
  const navigate = useNavigate()
  const [code, setCode] = useState("")

  return (
    <div className="search">
      <input type="text" placeholder="N seguimiento" value={code} onChange={(e)=>{setCode(e.target.value)}}/>
      <button onClick={()=>navigate(`/maps/${code}`)} className="button button-search">buscar</button>
    </div>
  );
};
