import React, { useRef, useEffect, useState } from "react";
import LeftFirst from "./LeftFirst";
import { FaSortAmountDown } from "react-icons/fa";
import { FiThumbsUp, FiThumbsDown, FiChevronDown } from "react-icons/fi";
import classes from "./left.module.scss";
const Left = () => {
  const [show, setShow] = useState(false);
  const contentRef = useRef("");
  const showHandler = () => {
    setShow((pre) => !pre);
  };
  useEffect(() => {
    const text = contentRef.current.innerText;
    const textLength = text.length;
    if (textLength >= 100) {
      setShow(true);
    }
  }, []);
  const fff = show && classes["left-des-content-second"];
  return (
    <div className={classes.left}>
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/PTlPYW-jcIA"
        title="04/13 樂天 VS 富邦 全場精華"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <LeftFirst />
      <div className={classes["left-des-content"]}>
        <div className={classes["left-des-content-first"]}>
          <div>觀看次數：51,140次 &nbsp; 2023年4月13日</div>
          <div className={fff} ref={contentRef}>
            --
            <br />
            立即訂閱中華職棒CPBL官方YouTube頻道，不錯過每場比賽的精彩好球→
            <br />
            今すぐCPBL公式YouTubeチャンネルを登録，全試合のナイスプレイを見逃さず→
            <br />
            http://bit.ly/2JKGTtd
            <br />
            <br />
            《CPBL中華職棒粉絲團》
            <br />
            《CPBL公式Facebookページ》
            <br />
            http://bit.ly/30QBUwb
            <br />
            <br />
            《追蹤IG還有更多訊息》
            <br />
            《公式Instagram内容もっと豊富》
            <br />
            http://bit.ly/2wn2m2B
            <br />
            <br />
            《跟隨Twitter更多精彩資訊》
            <br />
            《公式Twitterにフォロー、ここしかない情報をゲット！》
            <br />
            https://twitter.com/CPBL
            <br />
            <br />
            六隊全主場轉播請訂閱CPBLTV🎥
            <br />
            六球団の試合中継はCPBLTV🎥登録！
            <br />
            https://hamivideo.hinet.net/main/606.do
            <br />
          </div>
          {show ? (
            <div onClick={showHandler} style={{ cursor: "pointer" }}>
              顯示完整資訊
            </div>
          ) : (
            <div onClick={showHandler} style={{ cursor: "pointer" }}>
              隱藏資訊
            </div>
          )}
        </div>
      </div>
      <div className={classes.user}>
        <div className={classes.mainuser}>
          <span className={classes["left-total"]}>173則留言</span>
          <span>
            <span>
              <FaSortAmountDown />
            </span>
            <span style={{ marginLeft: "8px" }}>排序依據</span>
          </span>
        </div>
        <div className={classes["left-in"]}>
          <span className={classes.masinUserPhoto}></span>
          <span className={classes.comment}>
            <span className={classes["comment-first"]}>
              <span>發表留言...</span>
            </span>
          </span>
        </div>
      </div>
      <div>
        <div className={classes.otheruser}>
          <div className={classes.otherUserComment}></div>
          <div className={classes["otherUserDetail"]}>
            <div className={classes["user-day"]}>
              <span>使用者</span>
              <span>1天前</span>
            </div>
            <div>這是留言</div>
            <div className={classes["thumbsup-thumbsdown"]}>
              <span className={classes["thumps"]}>
                <FiThumbsUp size={18} />
              </span>
              <span className={classes["thumps-like"]}>50</span>
              <span className={classes["thumps"]}>
                <FiThumbsDown size={18} />
              </span>
              <span className={classes["otherUser-feedback"]}>回覆</span>
            </div>
            <div>
              <div className={classes["chevron"]}>
                <span className={classes["chevronDown"]}>
                  {" "}
                  <FiChevronDown size={12} color="blue" />
                </span>
                <span className={classes["chevornNumber"]}>4則回覆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
