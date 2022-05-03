import { useNavigate } from "react-router-dom";

export const DeliveryContentDate = ({ props }) => {
  return (
    <>
      <div className="column-center">
         <input type='date' className="input-primary"></input>
         <input type='time' className="input-primary"></input>
         <h3>Instrucciones al repartidor</h3>
         <input type='text' className="input-third"></input>

      </div>
      
      <button onClick={props.next} className="button button-destination">siguiente</button>
      <button onClick={props.back} className="button button-destination">Atrás</button>
    </>
  );
};
