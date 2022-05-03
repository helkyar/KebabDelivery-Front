export const DeliveryContentResume = ({ props }) => {
  console.log(props);
  return (
    <>
      <h1>model de resumen</h1>

      <button onClick={props.back} className="button button-destination">Atrás</button>
    </>
  );
};
