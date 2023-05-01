import React, { useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import classes from "./right.module.scss";
const Right = () => {
  const [able, setDisable] = useState(true);
  const elementRef = useRef(null);

  const testScroll = (element, speed, distance, step) => {
    let temp = 0;
    const sliderTimer = setInterval(() => {
      element.scrollLeft += step;
      temp += Math.abs(step);
      if (temp >= distance) {
        clearInterval(sliderTimer);
      }
      if (element.scrollLeft === 0) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    }, speed);
  };

  return (
    <div className={classes.test}>
      <div className={classes["right-top"]}>
        {!able && (
          <div
            className={classes["right-arrow"]}
            onClick={() => {
              testScroll(elementRef.current, 25, 100, -25);
            }}
          >
            <FaArrowLeft style={{ userSelect: "none" }} />
          </div>
        )}
        <div className={classes["right-top-container"]} ref={elementRef}>
          <div className={classes.test2}>
            <div className={classes["right-top-content"]}>測試1</div>
            <div className={classes["right-top-content"]}>測試2</div>
            <div className={classes["right-top-content"]}>測試3</div>
            <div className={classes["right-top-content"]}>測試4</div>
            <div className={classes["right-top-content"]}>測試5</div>
            <div className={classes["right-top-content"]}>測試6</div>
            <div className={classes["right-top-content"]}>測試6</div>
            <div className={classes["right-top-content"]}>測試6</div>
            <div className={classes["right-top-content"]}>測試6</div>
            <div className={classes["right-top-content"]}>測試6</div>
            <div className={classes["right-top-content"]}>測試6</div>
          </div>
        </div>
        <div
          className={classes["right-arrow"]}
          onClick={() => {
            testScroll(elementRef.current, 25, 100, 25);
          }}
        >
          <FaArrowRight style={{ userSelect: "none" }} />
        </div>
      </div>
      <div className={classes["right-little"]}>
        <div className={classes["right-content"]}>
          <div className={classes["right-video-pre"]}></div>
          <div className={classes["right-content-pre"]}>
            <span className={classes["right-little-video-title"]}>
              好看影片
            </span>
            <div>好看影片官方頻道</div>
            <div>觀看次數：54次，10天前</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={classes["right-little"]}>
        <div className={classes["right-content"]}>
          <div className={classes["right-video-pre"]}></div>
          <div className={classes["right-content-pre"]}>
            <span className={classes["right-little-video-title"]}>
              好看影片
            </span>
            <div>好看影片官方頻道</div>
            <div>觀看次數：54次，10天前</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={classes["right-little"]}>
        <div className={classes["right-content"]}>
          <div className={classes["right-video-pre"]}></div>
          <div className={classes["right-content-pre"]}>
            <span className={classes["right-little-video-title"]}>
              好看影片
            </span>
            <div>好看影片官方頻道</div>
            <div>觀看次數：54次，10天前</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={classes["right-little"]}>
        <div className={classes["right-content"]}>
          <div className={classes["right-video-pre"]}></div>
          <div className={classes["right-content-pre"]}>
            <span className={classes["right-little-video-title"]}>
              好看影片
            </span>
            <div>好看影片官方頻道</div>
            <div>觀看次數：54次，10天前</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={classes["right-little"]}>
        <div className={classes["right-content"]}>
          <div className={classes["right-video-pre"]}></div>
          <div className={classes["right-content-pre"]}>
            <span className={classes["right-little-video-title"]}>
              好看影片
            </span>
            <div>好看影片官方頻道</div>
            <div>觀看次數：54次，10天前</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={classes["right-little"]}>
        <div className={classes["right-content"]}>
          <div className={classes["right-video-pre"]}></div>
          <div className={classes["right-content-pre"]}>
            <span className={classes["right-little-video-title"]}>
              好看影片
            </span>
            <div>好看影片官方頻道</div>
            <div>觀看次數：54次，10天前</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={classes["right-little"]}>
        <div className={classes["right-content"]}>
          <div className={classes["right-video-pre"]}></div>
          <div className={classes["right-content-pre"]}>
            <span className={classes["right-little-video-title"]}>
              好看影片
            </span>
            <div>好看影片官方頻道</div>
            <div>觀看次數：54次，10天前</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className={classes["right-little"]}>
        <div className={classes["right-content"]}>
          <div className={classes["right-video-pre"]}></div>
          <div className={classes["right-content-pre"]}>
            <span className={classes["right-little-video-title"]}>
              好看影片
            </span>
            <div>好看影片官方頻道</div>
            <div>觀看次數：54次，10天前</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Right;
