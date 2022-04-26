import { useNavigate } from "react-router-dom";

export const DeliveryContentSize = (props) => {
  const navigate = useNavigate()

  

  console.log(props)
  return <> <h1>model de tamaño</h1>
  <button onClick={props.next}>siguiente</button>
  <button
    onClick={() => {
      navigate("/");
    }}
  >
    atras
  </button></>;
};
