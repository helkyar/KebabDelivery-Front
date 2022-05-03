import { useNavigate } from "react-router-dom";

export const DeliveryContentDate = ({ props }) => {
  return (
    <>
      <h1>model de fecha</h1>
      <button onClick={props.next}>siguiente</button>
      <button onClick={props.back}>atras</button>
    </>
  );
};
