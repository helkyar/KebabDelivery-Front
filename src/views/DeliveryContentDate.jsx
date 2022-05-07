import { useNavigate } from "react-router-dom";

export const DeliveryContentDate = ({ props }) => {
  return (
    <>
      <div className="column-center">
      <h4 className="resumen-titles">fecha</h4>
         <input type='date' placeholder="Fecha" className="input-primary"></input>
         <input type='time' placeholder="Hora" className="input-primary"></input>
         <h4 className="resumen-titles">Instrucciones al repartidor</h4>
         <textarea type='textarea' placeholder="Ejemplos: entregar en el buzón, código del intercomunicador, etc." rows='4' className="input-third"></textarea>

      </div>
    
      
      <button onClick={props.next} className="button button-destination">siguiente</button>
      <button onClick={props.back} className="button button-destination">Atrás</button>
    </>
  );
};
