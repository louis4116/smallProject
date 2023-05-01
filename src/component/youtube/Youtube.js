import React from "react";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
import classes from "./youtube.module.scss";
const Youtube = () => {
  return (
    <div className="test">
      <Header />
      <div>
        <div className={classes["youtube"]}>
          <div className={classes["youtube-left"]}>
            <Left />
          </div>
          <div className={classes["youtube-right"]}>
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
