import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./home.module.scss";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.app}>
      <div className={classes.home}>
        <div className={classes.css1}>
          <h3>絕對定位置中</h3>
          <div>
            <button onClick={() => navigate("/css1")}>偽元素測試</button>
          </div>
        </div>

        <div className={classes.css2}>
          <h3>Flex+margin置中</h3>
          <button onClick={() => navigate("/css2")}>
            <span>時鐘</span>
          </button>
        </div>
        <div className={classes.css3}>
          <h3>Grid+margin置中</h3>
          <button onClick={() => navigate("/css3")}>立體標題</button>
        </div>
        <div className={classes.js1}>
          <h3>Flex+justify+align置中</h3>
          <button onClick={() => navigate("/js1")}>計算機</button>
        </div>
        <div className={classes.youtubeLayout}>
          <h3>youtube切版</h3>
          <button onClick={() => navigate("/youtube")}>youtube切版</button>
        </div>
        <div className={classes.progressbar}>
          <h3>進度條</h3>
          <button onClick={() => navigate("/progressbar")}>進度條</button>
        </div>
        <div className={classes.navbar}>
          <h3>SideBar</h3>
          <button onClick={() => navigate("/navbar")}>SideBar</button>
        </div>
        <div className={classes.navbar}>
          <h3>Twitch切版</h3>
          <button onClick={() => navigate("/twitch")}>Twitch切版</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
