import { useState } from "react";
//size= there are two button card size, small and big
// tittleButton= it's de tittle of button
// children= is the component that is displayed whent the card is open
const ButtonCard = ({ children, size, titleButton }) => {
  const [onOpen, setOnOpen] = useState(false);
  const hadlerClick = () => {
    setOnOpen(!onOpen);
  };
  return (
    <div className="container-button-card">
      <div className={`button-card ${size} `} onClick={hadlerClick}>
        <h4 className="text-button-card">{titleButton}</h4>
      </div>
      {onOpen ? (
        <div className="desplegable-button-card">{children}</div>
      ) : null}
    </div>
  );
};
export default ButtonCard;
