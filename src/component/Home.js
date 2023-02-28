import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import classes from "./home.module.scss"
const Home = () => {
  const navigate=useNavigate();
  return (
    <div className={classes.home}>
      <div className={classes.css1}>
        <h3>絕對定位置中</h3>
        <div>
        <button onClick={()=>navigate("/css1")}>偽元素測試</button>
        
        </div>
        </div>
       
        <div className={classes.css2}>
          <h3>Flex+margin置中</h3>
            <button onClick={()=>navigate("/css2")}>
                <span>時鐘</span>
            </button>
        </div>
        <div className={classes.css3}>
          <h3>Grid+margin置中</h3>
        <button onClick={()=>navigate("/css3")}>立體標題</button>
          
        </div>
        <div className={classes.js1}>
          <h3>Flex+justify+align置中</h3>
          <button onClick={()=>navigate("/js1")}>計算機</button>
        </div>
    </div>
  )
}

export default Home