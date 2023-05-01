import React, { useEffect, useState, useRef } from "react";
import classes from "./css2.module.css";
const Css2 = () => {
  const [time, setTime] = useState(new Date());
  const hourRef = useRef();
  const minRef = useRef();
  const secRef = useRef();
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // console.log(secRef.current.style)

  useEffect(() => {
    const st = setInterval(() => {
      setTime(new Date());

      let s = time.getSeconds() * 6;
      let m = time.getMinutes() * 6 + (time.getSeconds() * 6) / 60;
      let h = time.getHours() * 30 + (time.getMinutes() * 30) / 60;
      secRef.current.style.transform = `translate(-50%) rotate(${s}deg)`;
      minRef.current.style.transform = `translate(-50%) rotate(${m}deg)`;
      hourRef.current.style.transform = `translate(-50%) rotate(${h}deg)`;
    }, 1000);
    return () => {
      clearInterval(st);
    };
  }, [time]);

  const result = list.map((index) => {
    return (
      <div key={index} className={classes[`time${index}`]}>
        {index}
      </div>
    );
  });
  return (
    <div className={classes.css2}>
      <div className={classes.clock}>
        {/* 時間數字 */}

        {result}
        <div className={classes.center}></div>
        <div
          className={classes["hour-hand"]}
          ref={hourRef}
          style={{ transform: "translate(-50%)  rotate(0deg)" }}
        ></div>
        <div
          className={classes["minute-hand"]}
          ref={minRef}
          style={{ transform: "translate(-50%)  rotate(0deg)" }}
        ></div>
        <div
          className={classes["second-hand"]}
          ref={secRef}
          style={{ transform: "translate(-50%)  rotate(0deg)" }}
        ></div>
      </div>
    </div>
  );
};

export default Css2;
