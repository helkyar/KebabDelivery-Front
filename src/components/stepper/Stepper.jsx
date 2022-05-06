const { useState } = require("react");

const Stepper = ({ titles, step }) => {
  return (
    <>
      <div className="container-stepper">
        {titles.map((title, key) => {
          return (
            <div
              key={key}
              className={
                key <= step ? "container-step check" : "container-step "
              }
            >
              <div
                className={
                  key + 1 <= step ? "container-steps line" : "container-steps "
                }
              >
                <span
                  className={
                    key === titles.length - 1
                      ? "step-round "
                      : "step-round step-line"
                  }
                ></span>
                <p className="step-title">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export { Stepper };
