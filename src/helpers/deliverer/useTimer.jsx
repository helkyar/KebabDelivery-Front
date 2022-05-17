import { useState, useEffect } from "react";

export const useTimer = (time) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [alarm, setAlarm] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setAlarm(false);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    if (seconds === time) {
      setAlarm(!alarm);
      reset();
      console.log("TIMER WORKS", new Date());
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return { setIsActive, alarm };
};
