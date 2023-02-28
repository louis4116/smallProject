import React from 'react'
import classes from "./css3.module.scss"
const Css3 = () => {
  return (
    
    
    <ul className={classes.ul}>
    <li style={{ zIndex:6 }}><a href="#">HOME</a></li>
    <li style={{ zIndex:5 }}><a href="#">FAMILY</a></li>
    <li style={{ zIndex:4 }}><a href="#">PRODUCT</a></li>
    <li style={{ zIndex:3 }}><a href="#">ABOUT</a></li>
    <li style={{ zIndex:2 }}><a href="#">PRICE</a></li>
    <li style={{ zIndex:1 }}><a href="#">TEST</a></li>
  </ul>
  
  )
}

export default Css3