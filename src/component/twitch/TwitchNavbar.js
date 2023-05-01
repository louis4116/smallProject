import React from "react";
import classes from "./twitchnavbar.module.scss";
import {
  FiMoreVertical,
  FiSearch,
  FiHardDrive,
  FiMessageSquare,
  FiTriangle,
} from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
const TwitchNavbar = () => {
  return (
    <nav className={classes.twitchnavbar}>
      <div className={classes["twitch-left"]}>
        <div className={classes["twitch-left-img"]}>
          <div>
            <img src={require("../../assets/twitch.png")} alt="icon" />
          </div>
        </div>
        <div className={classes["twitch-left-follow"]}>
          <div className={classes["twitch-left-follow-top"]}>
            <p> 追隨中</p>
          </div>
          <div className={classes["twitch-left-follow-bottom"]}></div>
        </div>
        <div className={classes["twitch-left-view"]}>
          <div> 瀏覽</div>
          <div></div>
        </div>
        <div className={classes["twitch-left-vertical"]}>
          <div>
            <FiMoreVertical />
          </div>
        </div>
      </div>
      <div className={classes["twitch-center"]}>
        <div className={classes["twitch-center-input"]}>
          <div className={classes["twitch-center-input-div-first"]}>
            <input
              className={classes["twitch-center-input-content"]}
              placeholder="搜尋"
            />
          </div>
          <div className={classes["twitch-center-input-div-second"]}>
            <FiSearch fontSize={24} />
          </div>
        </div>
      </div>
      <div className={classes["twitch-right"]}>
        <div>
          <FaCrown fontSize={16} />
        </div>
        <div>
          <FiHardDrive fontSize={16} />
        </div>
        <div>
          <FiMessageSquare fontSize={16} />
        </div>
        <div className={classes["twitch-right-triangle"]}>
          <div>
            <FiTriangle fontSize={16} />
          </div>
          <div style={{ fontSize: "13px" }}>購買小奇點</div>
        </div>
        <div>
          <img
            src={require("../../assets/frank.jpg")}
            style={{ width: "24px", height: "24px" }}
            alt="frank"
          />
        </div>
        <div>
          <img
            src={require("../../assets/7tv.png")}
            style={{ width: "24px", height: "24px", backgroundColor: "white" }}
            alt="7tv"
          />
        </div>
        <div className={classes["twitch-right-profile"]}>
          <div className={classes["twitch-right-profile-div"]}></div>
        </div>
      </div>
    </nav>
  );
};

export default TwitchNavbar;
