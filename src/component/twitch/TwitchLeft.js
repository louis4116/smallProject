import React from "react";
import { FiHeart, FiArrowRight, FiVideo } from "react-icons/fi";
import classes from "./twitchleft.module.scss";
const TwitchLeft = () => {
  const item = Array(12).fill(
    <div className={classes["twitch-left-second"]}>
      <div className={classes["twitch-left-following"]}></div>
    </div>
  );
  const unFollowItem = Array(6).fill(
    <div className={classes["twitch-left-second"]}>
      <div className={classes["twitch-left-following"]}></div>
    </div>
  );

  return (
    <div className={classes["twitch-left"]}>
      <div>
        <FiArrowRight color="white" fontSize={24} />
      </div>
      <div>
        <div className={classes["twitch-left-icon"]}>
          <FiHeart color="gray" fontSize={20} />
        </div>
        {item}
      </div>
      <div>
        <div className={classes["twitch-left-icon"]}>
          <FiVideo color="gray" fontSize={20} />
        </div>
        {unFollowItem}
      </div>
    </div>
  );
};

export default TwitchLeft;
