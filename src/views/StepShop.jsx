import { useState } from "react";

export const StepShop = () => {
  const [step, setStep] = useState(1);

  const managerStepComponent = () => {
    if (step === 1) {
      return (
        <>
          <h1>model de tamaño</h1>
          <button onClick={() => setStep(step + 1)}>siguiente</button>
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <h1>model de fecha</h1>
          <button onClick={() => setStep(step + 1)}>siguiente</button>
          <button onClick={() => setStep(step - 1)}>atras</button>
        </>
      );
    } else if (step === 3) {
      return (
        <>
          <h1>model de resumen</h1>

          <button onClick={() => setStep(step - 1)}>atras</button>
        </>
      );
    }
  };
  return <>{managerStepComponent()}</>;
};
