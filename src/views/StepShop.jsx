import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeliveryContentSize } from "./DeliveryContentSize";
import { DeliveryContentDate } from "./DeliveryContentDate";
import { DeliveryContentResume } from "./DeliveryContentResume";
import { Stepper } from "components/stepper/Stepper";

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
      return <DeliveryContentSize props={{ step, next, back }} />;
    } else if (step === 2) {
      return <DeliveryContentDate props={{ step, next, back }} />;
    } else if (step === 3) {
      return <DeliveryContentResume props={{ step, next, back }} />;
    }
  };
  const handleBack = () => {
    if (step === 1) {
      navigate("/");
    } else {
      back();
    }
  };
  return (
    <>
      <div className="app">
        <header className="header">
          <div>
            <h1 className="logo">kometa</h1>
          </div>
        </header>
        <button onClick={handleBack} className="button-back-shop"></button>
        <Stepper
          titles={["destino", "tamaño", "fecha", "resumen"]}
          step={step}
        />
        {managerStepComponent()}
      </div>
    </>
  );
};
