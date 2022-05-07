import { useNavigate } from "react-router-dom";
import ButtonCard from "components/buttoms/ButtonCard";
import { FaBeer } from "react-icons/fa";

export const DeliveryContentSize = ({ props }) => {
  const navigate = useNavigate();
  const hola = () => {
    console.log("funciona");
  };
  console.log(props);
  return (
    <>
      {" "}
      <ButtonCard size="small" titleButton="Paquete">
        <div>
          <div className="delivery-box-section">
            <div className="delivery-box">
              <input type="radio" id="pequeño" name="size" value="pequeño" />

              <label htmlFor="pequeño">labelequeño</label>
            </div>
            <div className="delivery-box">
              <input type="radio" id="mediano" name="size" value="media" />

              <label htmlFor="mediano">mediano</label>
            </div>
            <div className="delivery-box">
              <input type="radio" id="grande" name="size" value="grande" />

              <label htmlFor="grande">grande</label>
            </div>
          </div>
        </div>
      </ButtonCard>
      <ButtonCard size="small" titleButton="Sobre">
        <div>
          <div className="delivery-box-section">
            <input type="radio" name="radios" />
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
      <button onClick={props.next} className="button button-destination">
        siguiente
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="button button-destination"
      >
        Atrás
      </button>
    </>
  );
};
