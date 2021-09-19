import { useEffect, useState } from "react";

export const useProgressBar = (avance) => {
  const [progress, setProgress] = useState("");
  useEffect(() => {
    if (avance < 25) {
      setProgress("bg-danger");
    } else if (avance >= 25 && avance < 50) {
      setProgress("bg-warning");
    } else if (avance >= 50 && avance < 75) {
      setProgress("bg-info");
    } else if (avance >= 75) {
      setProgress("bg-info");
    } else {
      setProgress("");
    }
  }, [avance]);
  return { progress };
};
