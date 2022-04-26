import { useState } from "react";

import Stepper from "react-simple-stepper-component";
export const StepShop = () => {
  const [step, setStep] = useState(0);

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
  return (
    <>
      {managerStepComponent()} 
      <Stepper
        lineHeight="3"
        defaultTitleColor="#787878"
        defaultColor="#FFFFFF"
        defaultBorderColor="#FF8454"
        completeColor="#FF8454"
        completeBarColor="#FF8454"
        lineWeight="50"
        steps={[
          { title: "destino" },
          { title: "tamaño" },
          { title: "fecha" },
          { title: "resumen" },
        ]}
        activeStep={step}
      />
      <button onClick={() => setStep(step + 1)}>siguiente</button>{" "}
      <button onClick={() => setStep(step - 1)}>anterior</button>
    </>
  );
};
