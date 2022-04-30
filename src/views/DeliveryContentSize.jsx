import { useNavigate } from "react-router-dom";
import ButtonCard from "components/buttoms/ButtonCard";
import { FaBeer } from 'react-icons/fa';

export const DeliveryContentSize = (props) => {
  const navigate = useNavigate()

  

  console.log(props)
  return <> <h1>model de tamaño</h1>
  <ButtonCard size="small" titleButton="Paquete">
        <div>
          <div className="delivery-box-section">
            <div className="delivery-box">
            <FaBeer className="testicon" />
            <p>Pequeño</p>

            </div>
            <div className="delivery-box">
            <FaBeer className="testicon" />
            <p>Mediano</p>
            </div >
            <div className="delivery-box">
            <FaBeer className="testicon" />
            <p>Grande</p>
            </div>
          </div>
            <div className="delivery-box-nohover">
              <input type="text" placeholder="largo"></input>
              <input type="text" placeholder="ancho"></input>
              <input type="text" placeholder="alto"></input>
              <input type="text" placeholder="peso"></input>
              
            </div>

        </div>
      </ButtonCard>
  <button onClick={props.next}>siguiente</button>
  <button
    onClick={() => {
      navigate("/");
    }}
  >
    atras
  </button></>;
};
