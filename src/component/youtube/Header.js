import React from "react";
import List from "./icons/List";
import Search from "./icons/Search";
import YoutubeIcon from "./icons/YoutubeIcon";
import MicroPhone from "./icons/MicroPhone";
import Video from "./icons/Video";
import Bell from "./icons/Bell";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["header-first"]}>
        <div>
          <List />
        </div>
        <div>
          <YoutubeIcon />
        </div>
      </div>
      <div className={classes["header-second"]}>
        <div className={classes["header-second-search"]}>
          <div className={classes["header-second-search-container"]}>
            <div></div>
            <div>
              <Search />
            </div>
          </div>
        </div>
        <div className={classes["header-second-microphone"]}>
          <MicroPhone />
        </div>
      </div>
      <div className={classes["header-third"]}>
        <div className={classes["header-third-video"]}>
          <Video />
        </div>
        <div className={classes["header-third-bell"]}>
          <Bell />
        </div>
        <div className={classes["header-third-user"]}></div>
      </div>
    </div>
  );
};

export default Header;
