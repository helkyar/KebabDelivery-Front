import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStep = () => {
  const [step, setStep] = useState(1);
  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);
  return { step, next, back };
};

export const StepShop = () => {
  const { step, next, back } = useStep();
  const navigate = useNavigate();

  const managerStepComponent = () => {
    if (step === 1) {
      return (
        <>
          <h1>model de tamaño</h1>
          <button onClick={next}>siguiente</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            atras
          </button>
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <h1>model de fecha</h1>
          <button onClick={next}>siguiente</button>
          <button onClick={back}>atras</button>
        </>
      );
    } else if (step === 3) {
      return (
        <>
          <h1>model de resumen</h1>

          <button onClick={back}>atras</button>
        </>
      );
    }
  };
  return <>{managerStepComponent()}</>;
};
