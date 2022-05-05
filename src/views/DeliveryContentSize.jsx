import { useNavigate } from "react-router-dom";
import ButtonCard from "components/buttoms/ButtonCard";
import { FaBeer } from "react-icons/fa";

export const DeliveryContentSize = ({ props }) => {
  const navigate = useNavigate();

  console.log(props);
  return (
    <>
      {" "}
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
            </div>
            <div className="delivery-box">
              <FaBeer className="testicon" />
              <p>Grande</p>
            </div>
          </div>
        </div>
      </ButtonCard>
      
      <ButtonCard size="small" titleButton="Sobre">
        <div>
          <div className="delivery-box-section">
            <div className="delivery-box">
              <FaBeer className="testicon" />
              <p>Pequeño</p>
            </div>
            <div className="delivery-box">
              <FaBeer className="testicon" />
              <p>Mediano</p>
            </div>
            <div className="delivery-box">
              <FaBeer className="testicon" />
              <p>Grande</p>
            </div>
          </div>
        </div>
      </ButtonCard>
      <button onClick={props.next} className="button button-destination">siguiente</button>
      <button onClick={() => {
          navigate("/");
        }} className="button button-destination">Atrás</button>
    </>
  );
};
