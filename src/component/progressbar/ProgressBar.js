import React, { useEffect, useState } from "react";
import classes from "./progressbar.module.scss";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(false);

  const resetHandler = () => {
    setTime((pre) => !pre);
    setProgress(0);
  };

  useEffect(() => {
    if (progress < 100 && time) {
      setTimeout(() => setProgress((prev) => prev + 1), 100);
      console.log(progress);
    }
  }, [progress, time]);

  return (
    <div className={classes.pr}>
      <div className={classes.progress}>
        <div
          className={classes.progressbar}
          style={{ width: `${progress}%` }}
        ></div>
        <span>{progress}</span>
      </div>
      <button onClick={() => setTime(true)}>開始</button>
      <button onClick={resetHandler}>重置</button>
    </div>
  );
};

export default ProgressBar;
