import React from "react";
import TwitchRightBottom from "./TwitchRightBottom";
import classes from "./twitchright.module.scss";
const TwitchRight = () => {
  return (
    <div className={classes["twitch-right"]}>
      <div className={classes["twitch-right-first"]}>
        <h1>追隨中</h1>
        <div className={classes["twitch-right-navbar"]}>
          <div className={classes["twitch-right-p-first"]}>
            <p
              className={classes["twitch-right-p-all"]}
              style={{ paddingLeft: "5px" }}
            >
              <div className={classes["twitch-right-p-all-top"]}>
                <div className={classes["twitch-right-p-all-in-top"]}>總覽</div>
              </div>
              <div className={classes["twitch-right-p-all-in-bottom"]}></div>
            </p>
          </div>
          <p>Live</p>
          <p>影片</p>
          <p>分類</p>
          <p>頻道</p>
        </div>
      </div>
      <TwitchRightBottom />
    </div>
  );
};

export default TwitchRight;
