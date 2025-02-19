import { useState, useEffect } from "react";
import { CYCLE_TIME, HALF_CYCLE_TIME } from "../utils/constants";

type LightState = "A_GREEN" | "A_YELLOW" | "B_GREEN" | "B_YELLOW";

export const useTrafficLight = () => {
  const [currentLight, setCurrentLight] = useState<LightState>("A_GREEN");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    let timer: NodeJS.Timeout;

    switch (currentLight) {
      case "A_GREEN":
        timer = setTimeout(() => setCurrentLight("A_YELLOW"), CYCLE_TIME);
        break;
      case "A_YELLOW":
        timer = setTimeout(() => setCurrentLight("B_GREEN"), HALF_CYCLE_TIME);
        break;
      case "B_GREEN":
        timer = setTimeout(() => setCurrentLight("B_YELLOW"), CYCLE_TIME);
        break;
      case "B_YELLOW":
        timer = setTimeout(() => setCurrentLight("A_GREEN"), HALF_CYCLE_TIME);
        break;
    }

    return () => clearTimeout(timer);
  }, [currentLight, isRunning]);

  const startTraffic = () => setIsRunning(true);
  const resetTraffic = () => {
    setIsRunning(false);
    setCurrentLight("A_GREEN");
  };

  return { currentLight, isRunning, startTraffic, resetTraffic };
};
