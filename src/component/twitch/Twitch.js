import React from "react";
import TwitchNavbar from "./TwitchNavbar";
import TwitchLeft from "./TwitchLeft";
import TwitchRight from "./TwitchRight";
import classes from "./twitch.module.scss";

const Twitch = () => {
  return (
    <div className={classes.twitch}>
      <div>
        <TwitchNavbar />
      </div>
      <div className={classes["twitch-bottom"]}>
        <TwitchLeft />
        <TwitchRight />
      </div>
    </div>
  );
};

export default Twitch;
